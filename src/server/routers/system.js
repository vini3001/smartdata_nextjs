import crypto from 'crypto'

import bcrypt from 'bcryptjs'
import { z } from 'zod'

import { EmailReset } from '@/components/EmailTemplates'
import { removeTokenCookie, setTokenCookie } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { router, procedure, privateProcedure } from '@/server/trpc'

const systemRouter = router({
  //
  // Queries
  // ####################################################################################
  user: privateProcedure.query(async ({ ctx }) => {
    const user = await prisma.sd_usuario.findUnique({
      where: { id: ctx.userId },
      select: {
        nome: true,
        perfil_usuario: true,
        sd_cliente: { select: { id: true, nome: true, logo: true } },
      },
    })

    if (user?.perfil_usuario === 'ROOT') {
      user.clients = await prisma.sd_cliente.findMany({
        select: { id: true, nome: true, logo: true },
        orderBy: { nome: 'asc' },
      })
      user.sd_cliente = user.clients.find(c => c.id === ctx.clientId)
    }

    return {
      name: user?.nome,
      role: user?.perfil_usuario,
      tenant: { id: user?.sd_cliente?.id, name: user?.sd_cliente?.nome, logo: user?.sd_cliente?.logo },

      ...(user?.clients && { clients: user?.clients }),
    }
  }),

  periodicity: privateProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const ranges = await prisma.sd_disparo.findMany({
      where: {
        id_cliente: ctx.clientId,
        ativo: true,
        tipo_disparo: 'S',
        sd_disparo_informacao: { every: { sd_indicadores: { id: input.id } } },
      },
      select: { data_hora_inicio: true, data_hora_fim: true },
    })

    const ends = ranges.reduce(
      (acc, item) => {
        if (item.data_hora_inicio < acc.lower) {
          acc.lower = item.data_hora_inicio
        }
        if (item.data_hora_fim > acc.upper) {
          acc.upper = item.data_hora_fim
        }
        return acc
      },
      { lower: ranges[0].data_hora_inicio, upper: ranges[0].data_hora_fim }
    )

    ends.lower = ends.lower.getUTCHours()
    ends.upper = ends.upper.getUTCHours()

    const hours = await prisma.sd_periodicidade_nova.findMany({
      where: {
        id_cliente: ctx.clientId,
        tipo: 'HORA',
        hora: { gte: ends.lower, lte: ends.upper },
      },
      select: { id: true, descricao: true },
    })

    const days = await prisma.sd_periodicidade_nova.findMany({
      where: {
        id_cliente: ctx.clientId,
        tipo: 'DIA',
        hora: { gte: ends.lower, lte: ends.upper },
      },
      orderBy: [{ dia_mes: 'asc' }, { hora: 'asc' }],
      select: { id: true, descricao: true },
    })

    const weeks = await prisma.sd_periodicidade_nova.findMany({
      where: {
        id_cliente: ctx.clientId,
        tipo: 'SEMANA',
        hora: { gte: ends.lower, lte: ends.upper },
      },
      orderBy: [{ dia_semana: 'asc' }, { hora: 'asc' }],
      select: { id: true, descricao: true },
    })

    return { hours, days, weeks }
  }),

  mediaOfSelfService: privateProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const data = await prisma.sd_disparo.findMany({
      where: {
        id_cliente: ctx.clientId,
        ativo: true,
        tipo_disparo: 'S',
        sd_disparo_informacao: { every: { sd_indicadores: { id: input.id } } },
      },
      select: {
        sd_disparo_meio_comunicacao: {
          select: { sd_meio_comunicacao: { select: { id: true, nome: true } } },
        },
      },
    })
    const medias = data.flatMap(d =>
      d.sd_disparo_meio_comunicacao.map(dm => ({ alertId: d.id, ...dm.sd_meio_comunicacao }))
    )

    return medias
  }),

  //
  // Mutations
  // ####################################################################################
  signin: procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { email, password } = input

      const user = await prisma.sd_usuario.findFirst({
        where: { email },
        select: {
          id: true,
          ativo: true,
          email: true,
          password: true,
          perfil_usuario: true,
          sd_cliente: { select: { id: true, ativo: true } },
        },
      })
      if (!user) throw new Error(`Usuario nao encontrado ${email}`)
      if (!user.ativo) throw new Error(`Usuario Desativado!`)
      if (!user.sd_cliente.ativo) throw new Error(`Cliente Desativado!`)

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) throw new Error('Usuario ou senha invalidos!')

      await setTokenCookie(ctx.res, user.id, user.sd_cliente.id)

      return { id: user.id, email: user.email, role: user.perfil_usuario }
    }),

  signout: privateProcedure.mutation(async ({ ctx }) => {
    removeTokenCookie(ctx.res)
    return true
  }),

  changeClient: privateProcedure.input(z.object({ client: z.number() })).mutation(async ({ ctx, input }) => {
    await setTokenCookie(ctx.res, ctx.userId, input.client)
    return true
  }),

  requestReset: procedure.input(z.object({ email: z.string().email() })).mutation(async ({ input }) => {
    const user = await prisma.sd_usuario.findFirst({
      where: { email: input.email },
      select: { id: true, nome: true },
    })
    if (!user) {
      throw new Error(`Usuario nao encontrado para o email ${input.email}`)
    }

    // 2. Set a reset token and expiry on that user
    const resetToken = crypto.randomBytes(30).toString('hex')
    const resetTokenExpiry = new Date(Date.now() + 3600000).toISOString() // 1 hour from now

    console.log('reset token', resetToken)
    console.log('reset token expiry', resetTokenExpiry)
    console.log('email destino', input.email)
    console.log('usuario', user)

    await prisma.sd_usuario
      .update({
        where: { id: user.id },
        data: { resetToken, resetTokenExpiry },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao gerar token de troca de senha')
      })

    // 3. Email them that reset token
    const email = await resend.emails.send({
      from: 'smartdata@risti.com.br',
      to: input.email,
      subject: 'Esqueci a Senha',
      react: <EmailReset userFirstname={user.nome} link={`/reset?t=${resetToken}`} />,
    })

    console.log(email)

    if (email.error) {
      console.log(`${new Date()} --->>>`, email.error)
      throw Error('Erro ao enviar email de troca de senha')
    }

    return true

  }),

  resetPassword: procedure
    .input(z.object({ password: z.string(), resetToken: z.string() }))
    .mutation(async ({ input }) => {
      // 1. Check if token is still valid AGAIN because the page could be open for 1 hour
      const data = await prisma.sd_usuario.findFirst({
        where: {
          resetToken: input.resetToken,
          resetTokenExpiry: { gte: new Date(Date.now()).toISOString() },
        },
        select: { id: true },
      })
      if (!data) {
        throw new Error('Este pedido de alteracao de senha nao existe ou esta expirado')
      }

      const updatedUser = await prisma.sd_usuario.update({
        where: { id: data.id },
        data: {
          password: await bcrypt.hash(input.password, 10),
          resetToken: null,
          resetTokenExpiry: null,
        },
      })

      return updatedUser
    }),

  internalChangePassword: privateProcedure
    .input(z.object({ password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await prisma.sd_usuario
        .update({
          where: { id: ctx.userId },
          data: { password: await bcrypt.hash(input.password, 10) },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar nova senha')
        })

      return true
    }),
})

export default systemRouter
