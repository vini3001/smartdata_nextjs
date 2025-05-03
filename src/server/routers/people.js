import crypto from 'crypto'

import { z } from 'zod'

import { EmailWelcome } from '@/components/EmailTemplates'
import prisma from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { router, privateProcedure } from '@/server/trpc'

const peopleRouter = router({
  //
  // Queries
  // ####################################################################################
  byId: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await prisma.sd_pessoa.findUnique({
        where: { id_cliente: ctx.clientId, id: input.id },
        include: {
          sd_cargo: true,
          sd_departamento: true,
          sd_membro_grupo_pessoa: { select: { sd_grupo_pessoa: true } },
          sd_pessoa_local_empresa: { select: { sd_localempresa: { select: { id: true, nomelocal: true } } } },
          sd_pessoa_informacao: { select: { sd_indicadores: { select: { id: true, nome: true } } } },
          sd_pessoa_grupo_informacao: {
            select: { sd_grupo_informacao: { select: { id: true, nome: true } } },
          },
          sd_pessoa_menu: { select: { sd_estrutura_menu: { select: { id: true, descricao: true } } } },
          sd_meio_comunicacao_pessoa: { select: { valor: true, sd_meio_comunicacao: true } },
          sd_usuario: {
            select: { ativo: true, email: true, perfil_usuario: true },
          },
        },
      })

      if (data) {
        data.sd_membro_grupo_pessoa = data?.sd_membro_grupo_pessoa.map(i => ({ ...i.sd_grupo_pessoa }))
        data.sd_pessoa_local_empresa = data?.sd_pessoa_local_empresa.map(i => ({ ...i.sd_localempresa }))
        data.sd_pessoa_informacao = data?.sd_pessoa_informacao.map(i => ({ ...i.sd_indicadores }))
        data.sd_pessoa_grupo_informacao = data?.sd_pessoa_grupo_informacao.map(i => ({
          ...i.sd_grupo_informacao,
        }))
        data.sd_pessoa_menu = data?.sd_pessoa_menu.map(i => ({
          ...i.sd_estrutura_menu,
        }))
        data.sd_meio_comunicacao_pessoa = data.sd_meio_comunicacao_pessoa?.map(i => ({
          valor: i.valor,
          ...i.sd_meio_comunicacao,
          mediaId: i.sd_meio_comunicacao.id,
          id: crypto.randomUUID(), // to remove conflict in the DataGrid component - ONLY WORKS SERVER SIDE
          // crypto needs HTTPS on client side
        }))

        // fix for null sd_usuario
        if (!data.sd_usuario)
          data.sd_usuario = {
            ativo: false,
            email: '',
            perfil_usuario: 'USER',
          }
      }

      return data
    }),

  all: privateProcedure
    .input(
      z.object({
        order: z.string(),
        active: z.boolean(),
        name: z.string(),
        position: z.string(),
        department: z.string(),
        group: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await prisma.sd_pessoa.findMany({
        where: {
          id_cliente: ctx.clientId,
          ativo: input.active,
          nome: { contains: input.name, mode: 'insensitive' },
          sd_cargo: { nome: { contains: input.position, mode: 'insensitive' } },
          sd_departamento: { departamento: { contains: input.department, mode: 'insensitive' } },
          ...(input.group !== '' && {
            sd_membro_grupo_pessoa: {
              some: {
                sd_grupo_pessoa: { nome: { contains: input.group, mode: 'insensitive' } },
              },
            },
          }),
        },
        include: {
          sd_cargo: true,
          sd_departamento: true,
          sd_membro_grupo_pessoa: { select: { sd_grupo_pessoa: true } },
        },
        orderBy: { id: input.order },
      })

      //
      // CONVERT THIS:
      // sd_membro_grupo_pessoa: [
      //   { sd_grupo_pessoa: { id: 2, nome: 'diretores' } },
      //   { sd_grupo_pessoa: { id: 1, nome: 'amigos' } }
      // ]
      // TO THIS:
      // sd_membro_grupo_pessoa: [{ id: 2, nome: 'diretores' }, { id: 1, nome: 'amigos' }]
      data.forEach(pessoa => {
        pessoa.sd_membro_grupo_pessoa = pessoa.sd_membro_grupo_pessoa.map(i => ({ ...i.sd_grupo_pessoa }))
      })

      return data
    }),

  positions: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_cargo.findMany({ where: { id_cliente: ctx.clientId }, orderBy: { nome: 'asc' } })
  ),
  departments: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_departamento.findMany({
      where: { id_cliente: ctx.clientId },
      orderBy: [{ divisao: 'asc' }, { departamento: 'asc' }],
    })
  ),
  groups: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_grupo_pessoa.findMany({ where: { id_cliente: ctx.clientId }, orderBy: { nome: 'asc' } })
  ),
  medias: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_meio_comunicacao.findMany({
      where: { id_cliente: ctx.clientId },
      select: { id: true, nome: true },
      orderBy: { nome: 'asc' },
    })
  ),
  mediasOfPeople: privateProcedure.query(async ({ ctx }) => {
    const data = await prisma.sd_pessoa.findFirst({
      where: { id_cliente: ctx.clientId, id_usuario: ctx.userId },
      select: {
        sd_meio_comunicacao_pessoa: { select: { sd_meio_comunicacao: { select: { id: true, nome: true } } } },
      },
    })

    const medias = data?.sd_meio_comunicacao_pessoa.map(i => ({ ...i.sd_meio_comunicacao }))
    return medias
  }),

  //
  //
  // ####################################################################################
  // Mutations
  // ####################################################################################
  upsert: privateProcedure
  .input(z.object({
    nome: z.string(),
    ativo: z.boolean(),
  }))
  .mutation(async ({ ctx, getRawInput }) => {
    const rawInput = await getRawInput()

    const { id, ...input } = rawInput

    // ##########################
    // Get actual relations and delete then only after the upsert mutation is resolved
    const delGrupo = id
      ? await prisma.sd_membro_grupo_pessoa.findMany({ where: { id_cliente: ctx.clientId, id_pessoa: id } })
      : []
    const delLocal = id
      ? await prisma.sd_pessoa_local_empresa.findMany({ where: { id_cliente: ctx.clientId, id_pessoa: id } })
      : []
    const delInfo = id
      ? await prisma.sd_pessoa_informacao.findMany({ where: { id_cliente: ctx.clientId, id_pessoa: id } })
      : []
    const delGroupInfo = id
      ? await prisma.sd_pessoa_grupo_informacao.findMany({
          where: { id_cliente: ctx.clientId, id_pessoa: id },
        })
      : []
    const delMenu = id
      ? await prisma.sd_pessoa_menu.findMany({
          where: { id_cliente: ctx.clientId, id_pessoa: id },
        })
      : []
    const delMeio = id
      ? await prisma.sd_meio_comunicacao_pessoa.findMany({
          where: { id_cliente: ctx.clientId, id_pessoa: id },
        })
      : []
    const usersFromClient = await prisma.sd_usuario.findMany({
      where: { id_cliente: ctx.clientId, sd_pessoa: { some: { id: { not: id || 0 } } } },
      select: { email: true },
    })

    const getUser = await prisma.sd_pessoa.findUnique({
      where: { id_cliente: ctx.clientId, id: id || 0 },
      select: { sd_usuario: true },
    })
    const userExists = getUser?.sd_usuario
    const resetToken = crypto.randomBytes(30).toString('hex')
    const resetTokenExpiry = new Date(Date.now() + 3600000).toISOString() // 1 hour from now
    // ##########################

    if (usersFromClient.some(u => u.email === input.sd_usuario?.email && u.email !== userExists?.email))
      throw Error('Email já cadastrado')

    const data = {
      id_cliente: ctx.clientId,
      nome: input.nome,
      ativo: input.ativo,
      sd_cargo: { connect: { id: input.sd_cargo.id } },
      sd_departamento: { connect: { id: input.sd_departamento.id } },
      sd_membro_grupo_pessoa: {
        create: input.sd_membro_grupo_pessoa.map(item => ({
          id_cliente: ctx.clientId,
          sd_grupo_pessoa: { connect: { id: item.id } },
        })),
      },
      sd_pessoa_local_empresa: {
        create: input.sd_pessoa_local_empresa.map(item => ({
          id_cliente: ctx.clientId,
          sd_localempresa: { connect: { id: item.id } },
        })),
      },
      sd_pessoa_informacao: {
        create: input.sd_pessoa_informacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_indicadores: { connect: { id: item.id } },
        })),
      },
      sd_pessoa_grupo_informacao: {
        create: input.sd_pessoa_grupo_informacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_grupo_informacao: { connect: { id: item.id } },
        })),
      },
      sd_pessoa_menu: {
        create: input.sd_pessoa_menu.map(item => ({
          id_cliente: ctx.clientId,
          sd_estrutura_menu: { connect: { id: item.id } },
        })),
      },
      sd_meio_comunicacao_pessoa: {
        create: input.sd_meio_comunicacao_pessoa.map(item => ({
          id_cliente: ctx.clientId,
          valor: item.valor,
          sd_meio_comunicacao: { connect: { id: item.mediaId } },
        })),
      },

      // userExists and input.ativo -> update
      // userExists and !input.ativo -> update to ativo = false
      // !userExists and input.ativo -> create
      // !userExists and !input.ativo -> nothing
      ...(userExists && {
        sd_usuario: {
          update: {
            ativo: input.sd_usuario.ativo,
            nome: input.nome,
            email: input.sd_usuario.email,
            perfil_usuario: input.sd_usuario.perfil_usuario,
            ...(input.sd_usuario.ativo && // reactivating user -> send email
              !userExists?.ativo && {
                resetToken,
                resetTokenExpiry,
              }),
          },
        },
      }),
      ...(!userExists &&
        input.sd_usuario.ativo && {
          sd_usuario: {
            create: {
              id_cliente: ctx.clientId,
              ativo: true,
              nome: input.nome,
              email: input.sd_usuario.email,
              perfil_usuario: input.sd_usuario.perfil_usuario,
              password: '',
              resetToken,
              resetTokenExpiry,
            },
          },
        }),
    }

    const upsertPeople = await prisma.sd_pessoa
      .upsert({
        where: { id_cliente: ctx.clientId, id: id || 0 },
        update: { ...data },
        create: {
          ...data,
          ...(data.sd_usuario?.update && { sd_usuario: undefined }),
        }, // Prisma should ignore this, but he don't accept an 'update' inside a 'create'
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })
      .then(() =>
        prisma.sd_membro_grupo_pessoa.deleteMany({ where: { id: { in: delGrupo.map(x => x.id) } } })
      )
      .then(() =>
        prisma.sd_pessoa_local_empresa.deleteMany({ where: { id: { in: delLocal.map(x => x.id) } } })
      )
      .then(() => prisma.sd_pessoa_informacao.deleteMany({ where: { id: { in: delInfo.map(x => x.id) } } }))
      .then(() =>
        prisma.sd_pessoa_grupo_informacao.deleteMany({ where: { id: { in: delGroupInfo.map(x => x.id) } } })
      )
      .then(() => prisma.sd_pessoa_menu.deleteMany({ where: { id: { in: delMenu.map(x => x.id) } } }))
      .then(() =>
        prisma.sd_meio_comunicacao_pessoa.deleteMany({ where: { id: { in: delMeio.map(x => x.id) } } })
      )

    // send email if user is being created or reactivated
    if (input.sd_usuario.ativo && (!userExists || !userExists?.ativo)) {
      const email = await resend.emails.send({
        from: 'smartdata@risti.com.br',
        to: input.sd_usuario.email,
        subject: 'Bem vindo ao SmartData',
        react: <EmailWelcome userFirstname={input.nome} link={`/reset?t=${resetToken}`} />,
      })
      if (email.error) {
        console.log(`${new Date()} --->>>`, email.error)
        throw Error('Erro ao enviar email de troca de senha')
      }
    }

    return upsertPeople
  }),

  //
  //
  toogleActive: privateProcedure
    .input(
      z.object({
        id: z.number(),
        active: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) =>
      prisma.sd_pessoa
        .update({
          where: { id_cliente: ctx.clientId, id: input.id },
          data: { ativo: !input.active },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao ativar/inativar')
        })
    ),

  //
  //
  // ###################################################
  positionUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_cargo
        .upsert({
          where: { id_cliente: ctx.clientId, id: input.id || 0 },
          update: { nome: input.nome, id_cliente: ctx.clientId },
          create: { nome: input.nome, id_cliente: ctx.clientId },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar estes dados')
        })
    ),

  positionDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_cargo.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar este cargo')
      })
    ),

  //
  //
  // ###################################################
  departmentUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        divisao: z.string(),
        departamento: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_departamento
        .upsert({
          where: { id_cliente: ctx.clientId, id: input.id || 0 },
          update: { divisao: input.divisao, departamento: input.departamento, id_cliente: ctx.clientId },
          create: { divisao: input.divisao, departamento: input.departamento, id_cliente: ctx.clientId },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar estes dados')
        })
    ),

  departmentDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_departamento.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error(
          err.message.match('Foreign key constraint')
            ? 'Existem Pessoas(ativas ou inativas) neste departamento'
            : 'Erro ao apagar este departamento'
        )
      })
    ),

  //
  //
  // ###################################################
  groupUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_grupo_pessoa
        .upsert({
          where: { id_cliente: ctx.clientId, id: input.id || 0 },
          update: { nome: input.nome, id_cliente: ctx.clientId },
          create: { nome: input.nome, id_cliente: ctx.clientId },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar estes dados')
        })
    ),

  groupDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_grupo_pessoa.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar este grupo')
      })
    ),

  //
  //
  // ###################################################
  mediaUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_meio_comunicacao
        .upsert({
          where: { id_cliente: ctx.clientId, id: input.id || 0 },
          update: { nome: input.nome },
          create: { nome: input.nome, id_cliente: ctx.clientId },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar estes dados')
        })
    ),

  mediaDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_meio_comunicacao.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar este grupo')
      })
    ),
})

export default peopleRouter
