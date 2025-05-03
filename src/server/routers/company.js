import { z } from 'zod'

import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const companyRouter = router({
  byId: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await prisma.sd_empresa.findUnique({
        where: { id_cliente: ctx.clientId, id: input.id },
        include: {
          sd_localempresa: {
            include: {
              _count: {
                select: { sd_pessoa_local_empresa: true },
              },
            },
          },
          sd_parametros_empresa: true,
        },
      })

      return data
    }),

  all: privateProcedure
    .input(
      z.object({
        order: z.string(),
        active: z.boolean().optional(),
        name: z.string(),
        location: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await prisma.sd_empresa.findMany({
        where: {
          id_cliente: ctx.clientId,
          ativo: input.active,
          nome: { contains: input.name, mode: 'insensitive' },
          OR: [
            { sd_localempresa: { some: { nomelocal: { contains: input.location, mode: 'insensitive' } } } },
            { sd_localempresa: { every: { nomelocal: '' } } },
          ],
        },
        include: {
          sd_localempresa: { select: { nomelocal: true } },
          sd_parametros_empresa: true,
        },
        orderBy: { id: input.order },
      })

      return data
    }),

  allWithFixedClient: privateProcedure
    .input(
      z.object({
        order: z.string(),
        active: z.boolean().optional(),
        name: z.string(),
        location: z.string(),
      })
    )
    .query(async ({ input }) => {
      const data = await prisma.sd_empresa.findMany({
        where: {
          id_cliente: 1,
          ativo: input.active,
          nome: { contains: input.name, mode: 'insensitive' },
          OR: [
            { sd_localempresa: { some: { nomelocal: { contains: input.location, mode: 'insensitive' } } } },
            { sd_localempresa: { every: { nomelocal: '' } } },
          ],
        },
        include: {
          sd_localempresa: { select: { nomelocal: true } },
          sd_parametros_empresa: true,
        },
        orderBy: { id: input.order },
      })

      return data
    }),

  locals: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_localempresa.findMany({
      where: { id_cliente: ctx.clientId, sd_empresa: { ativo: true } },
      orderBy: { id_cliente_localempresa: 'asc' },
    })
  ),

  upsert: privateProcedure.mutation(async ({ ctx, getRawInput }) => {
    const rawInput = await getRawInput()
    const { id, ...input } = rawInput

    const locals = id
      ? await prisma.sd_localempresa.findMany({
          where: { id_cliente: ctx.clientId, id_empresa: id },
          select: { id: true, nomelocal: true },
        })
      : []

    const params = id
      ? await prisma.sd_parametros_empresa.findMany({
          where: { id_cliente: ctx.clientId, id_empresa: id },
          select: { id: true, chave: true, valor: true, id_empresa: true, id_cliente: true },
        })
      : []

    const toDeleteLocals = locals.filter(s => !input.sd_localempresa.some(l => l.id === s.id))
    const toCreateLocals = input.sd_localempresa.filter(s => !locals.some(l => l.id === s.id))
    const toUpdateLocals = input.sd_localempresa.filter(s => locals.some(l => l.id === s.id))
    const runUpdateLocals = toUpdateLocals.map(u =>
      prisma.sd_localempresa.update({
        where: { id: u.id },
        data: {
          id_cliente_localempresa: u.id_cliente_localempresa,
          nomelocal: u.nomelocal,
          tipolocal: u.tipolocal,
          nomelocal_speak: u.nomelocal_speak,
          preposicao_speak: u.preposicao_speak,
        },
      })
    )

    const toDeleteParameters = params.filter(s => !input.sd_parametros_empresa.some(l => l.id === s.id))
    const toCreateParameters = input.sd_parametros_empresa.filter(s => !params.some(l => l.id === s.id))
    const toUpdateParameters = input.sd_parametros_empresa.filter(s => params.some(l => l.id === s.id))
    const runUpdateParameters = toUpdateParameters.map(u =>
      prisma.sd_parametros_empresa.update({
        where: { id: u.id },
        data: {
          id_cliente: ctx.clientId,

          chave: u.chave,
          valor: u.valor,
        },
      })
    )

    const data = {
      id_cliente: ctx.clientId,
      nome: input.nome,
      razaosocial: input.razaosocial,
      ativo: input.ativo,
      id_cliente_empresa: input.id_cliente_empresa,
      sd_localempresa: {
        create: toCreateLocals.map(item => ({
          id_cliente: ctx.clientId,
          id_cliente_localempresa: item.id_cliente_localempresa,
          nomelocal: item.nomelocal,
          tipolocal: item.tipolocal,
          nomelocal_speak: item.nomelocal_speak,
          preposicao_speak: item.preposicao_speak,
        })),
      },
      sd_parametros_empresa: {
        create: toCreateParameters.map(param => ({
          id_cliente: ctx.clientId,
          chave: param.chave,
          valor: param.valor,
        })),
      },
    }

    const upsertInfo = await prisma.sd_empresa
      .upsert({
        where: { id_cliente: ctx.clientId, id: id || 0 },
        update: { ...data },
        create: { ...data },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })
      .then(() => Promise.all(runUpdateLocals))
      .then(() => Promise.all(runUpdateParameters))
      .then(() => prisma.sd_localempresa.deleteMany({ where: { id: { in: toDeleteLocals.map(x => x.id) } } }))
      .then(() =>
        prisma.sd_parametros_empresa.deleteMany({ where: { id: { in: toDeleteParameters.map(x => x.id) } } })
      )
    return upsertInfo
  }),

  toogleActive: privateProcedure
    .input(
      z.object({
        id: z.number(),
        active: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) =>
      prisma.sd_empresa
        .update({
          where: { id_cliente: ctx.clientId, id: input.id },
          data: { ativo: !input.active },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao ativar/inativar')
        })
    ),
})

export default companyRouter
