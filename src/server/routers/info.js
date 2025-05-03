import { z } from 'zod'

import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const infoRouter = router({
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
      const data = await prisma.sd_indicadores.findUnique({
        where: { id_cliente: ctx.clientId, id: input.id },
        include: {
          sd_departamento: true,
          sd_membro_grupo_informacao: { select: { sd_grupo_informacao: true } },
          sd_origem_informacao: { select: { id: true, nome: true } }, // ignore other fields
          sd_formato_destino: { select: { id: true, nome: true } }, // ignore other fields
          sd_finalidade: { select: { id: true, nome: true } },
        },
      })

      if (data)
        data.sd_membro_grupo_informacao = data?.sd_membro_grupo_informacao.map(i => ({
          ...i.sd_grupo_informacao,
        }))

      return data
    }),

  all: privateProcedure
    .input(
      z.object({
        order: z.string(),
        active: z.boolean(),
        name: z.string(),
        idClient: z.string(),
        origin: z.string(),
        destination: z.string(),
        group: z.string(),
        finality: z.string(),
        division: z.string(),
        department: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await prisma.sd_usuario.findUnique({
        where: { id_cliente: ctx.clientId, id: ctx.userId },
        select: { perfil_usuario: true, sd_pessoa: { select: { id: true } } },
      })
      const peopleId = user?.sd_pessoa[0]?.id // some users don't have a person associated

      const data = await prisma.sd_indicadores.findMany({
        where: {
          id_cliente: ctx.clientId,
          // if user, then there is a relation with sd_pessoa
          ...(user?.perfil_usuario === 'USER' && {
            OR: [
              { sd_pessoa_informacao: { some: { sd_pessoa: { id: peopleId } } } },
              {
                sd_membro_grupo_informacao: {
                  some: {
                    sd_grupo_informacao: {
                      sd_pessoa_grupo_informacao: { some: { sd_pessoa: { id: peopleId } } },
                    },
                  },
                },
              },
            ],
          }),
          ativo: input.active,
          nome: { contains: input.name, mode: 'insensitive' },
          id_cliente_indicadores: { contains: input.idClient, mode: 'insensitive' },
          // Adjusted the filter to use the new foreign key sd_finalidade
          ...(input.finality && {
            sd_finalidade: { nome: { contains: input.finality, mode: 'insensitive' } },
          }),
          sd_departamento: {
            divisao: { contains: input.division, mode: 'insensitive' },
            departamento: { contains: input.department, mode: 'insensitive' },
          },
          ...(input.origin && {
            sd_origem_informacao: { nome: { contains: input.origin, mode: 'insensitive' } },
          }),
          ...(input.destination && {
            sd_formato_destino: { nome: { contains: input.destination, mode: 'insensitive' } },
          }),
          ...(input.group !== '' && {
            sd_membro_grupo_informacao: {
              some: {
                sd_grupo_informacao: { nome: { contains: input.group, mode: 'insensitive' } },
              },
            },
          }),
        },
        select: {
          id: true,
          nome: true,
          descricao: true,
          ativo: true,
          sd_finalidade: { select: { nome: true } }, // Ensure to select the finality name
          report_id: true,
          workspace_id: true,
          capacidade_pbi: true,
          workspace_id_integracao: true,
          report_id_integracao: true,
          sd_membro_grupo_informacao: { select: { sd_grupo_informacao: true } },
          sd_disparo_informacao: { select: { sd_disparo: { select: { ativo: true, tipo_disparo: true } } } },
        },
        orderBy: { id: input.order },
      })

      // CONVERT THIS:
      // sd_membro_grupo_informacao: [
      //   { sd_grupo_informacao: { id: 2, nome: 'diretores' } },
      //   { sd_grupo_informacao: { id: 1, nome: 'amigos' } }
      // ]
      // TO THIS:
      // sd_membro_grupo_informacao: [{ id: 2, nome: 'diretores' }, { id: 1, nome: 'amigos' }]
      data.forEach(info => {
        info.sd_membro_grupo_informacao = info.sd_membro_grupo_informacao.map(i => ({
          ...i.sd_grupo_informacao,
        }))
      })

      return data
    }),

  names: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_indicadores.findMany({
      where: { id_cliente: ctx.clientId, ativo: true },
      select: { id: true, nome: true, sd_departamento: { select: { divisao: true, departamento: true } } },
      orderBy: { nome: 'asc' },
    })
  ),
  groups: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_grupo_informacao.findMany({ where: { id_cliente: ctx.clientId }, orderBy: { nome: 'asc' } })
  ),
  origins: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_origem_informacao.findMany({
      where: { id_cliente: ctx.clientId },
      select: { id: true, nome: true },
      orderBy: { nome: 'asc' },
    })
  ),
  finalidades: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_finalidade.findMany({
      where: { id_cliente: ctx.clientId },
      select: { id: true, nome: true },
      orderBy: { nome: 'asc' },
    })
  ),
  destinations: privateProcedure.query(async ({ ctx }) =>
    prisma.sd_formato_destino.findMany({
      where: { id_cliente: ctx.clientId },
      select: { id: true, nome: true },
      orderBy: { nome: 'asc' },
    })
  ),

  drill: privateProcedure.query(async ({ ctx }) => {
    const role = await (await prisma.sd_usuario.findUnique({ where: { id: ctx.userId } })).perfil_usuario

    if (role !== 'USER') {
      const dataAdmin = await prisma.sd_indicadores.findMany({
        where: { id_cliente: ctx.clientId },
        select: {
          sd_finalidade: true,
          sd_departamento: { select: { divisao: true, departamento: true } },
        },
        orderBy: { finalidade: 'desc' },
      })

      const uniqueCombinations = dataAdmin
        .map(item => ({
          finalidade: item.sd_finalidade.nome,
          divisao: item.sd_departamento.divisao,
          departamento: item.sd_departamento.departamento,
        }))
        .filter(
          (v, i, a) =>
            a.findIndex(
              t =>
                t.finalidade === v.finalidade && t.divisao === v.divisao && t.departamento === v.departamento
            ) === i
        )

      return uniqueCombinations
    }

    const data = await prisma.sd_pessoa.findMany({
      where: { id_cliente: ctx.clientId, id_usuario: ctx.userId },
      select: {
        sd_pessoa_informacao: {
          select: {
            sd_indicadores: {
              select: {
                sd_finalidade: { select: { id: true, nome: true } },
                sd_departamento: { select: { divisao: true, departamento: true } },
              },
            },
          },
        },
        sd_pessoa_grupo_informacao: {
          select: {
            sd_grupo_informacao: {
              select: {
                sd_membro_grupo_informacao: {
                  select: {
                    sd_indicadores: {
                      select: {
                        sd_finalidade: { select: { id: true, nome: true } },
                        sd_departamento: { select: { divisao: true, departamento: true } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    const result = data
      .reduce((acc, item) => {
        const pessoaInfo = item.sd_pessoa_informacao.map(info => ({
          finalidade: info.sd_indicadores.sd_finalidade.nome,
          divisao: info.sd_indicadores.sd_departamento.divisao,
          departamento: info.sd_indicadores.sd_departamento.departamento,
        }))

        const grupoInfo = item.sd_pessoa_grupo_informacao.reduce((accGru, grupo) => {
          const membros = grupo.sd_grupo_informacao.sd_membro_grupo_informacao.map(info => ({
            finalidade: info.sd_indicadores.sd_finalidade.nome,
            divisao: info.sd_indicadores.sd_departamento.divisao,
            departamento: info.sd_indicadores.sd_departamento.departamento,
          }))
          return [...accGru, ...membros]
        }, [])

        return [...acc, ...pessoaInfo, ...grupoInfo]
      }, [])
      .filter(
        (value, index, self) =>
          self.findIndex(
            v =>
              v.finalidade === value.finalidade &&
              v.divisao === value.divisao &&
              v.departamento === value.departamento
          ) === index
      )

    return result
  }),

  subscribed: privateProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const medias = await prisma.sd_periodicidade_meio_comunicacao.findMany({
      where: { id_cliente: ctx.clientId, id_usuario: ctx.userId, id_indicadores: input.id },
      select: { id_meio_comunicacao: true, sd_meio_comunicacao: { select: { nome: true } } },
    })

    const periods = await prisma.sd_periodicidade_assinatura.findMany({
      where: { id_cliente: ctx.clientId, id_usuario: ctx.userId, id_indicadores: input.id },
      select: { id_periodicidade: true, sd_periodicidade: { select: { descricao: true } } },
    })

    const output = {
      media: medias.map(m => ({ id: m.id_meio_comunicacao, nome: m.sd_meio_comunicacao.nome })),
      ...periods.reduce(
        (acc, item) => {
          const {
            id_periodicidade: id,
            sd_periodicidade: { descricao },
          } = item

          if (descricao.includes('Todo dia')) {
            acc.day.push({ id, descricao })
          } else if (
            descricao.includes('-Feira') ||
            descricao.includes('Sábado') ||
            descricao.includes('Domingo')
          ) {
            acc.week.push({ id, descricao })
          } else if (descricao.includes('hora')) {
            acc.hour.push({ id, descricao })
          }

          return acc
        },
        { hour: [], day: [], week: [] }
      ),
    }

    return output
  }),
  isSubscribe: privateProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) =>
    prisma.sd_periodicidade_meio_comunicacao.findMany({
      where: { id_cliente: ctx.clientId, id_usuario: ctx.userId, id_indicadores: input.id },
      select: { id_meio_comunicacao: true },
    })
  ),

  //
  // Mutations
  // ####################################################################################
  upsert: privateProcedure.mutation(async ({ ctx, getRawInput }) => {
    const rawInput = await getRawInput()

    delete rawInput.origem
    delete rawInput.formato_destino
    delete rawInput.id_origem_informacao
    delete rawInput.id_formato_destino
    delete rawInput.id_departamento
    delete rawInput.id_finalidade

    const {
      id,
      sd_origem_informacao: origemInformacao,
      sd_formato_destino: formatoDestino,
      ...input
    } = rawInput

    // ##########################
    // Get actual relations and delete then only after the upsert mutation is resolved
    const delGrupo = id
      ? await prisma.sd_membro_grupo_informacao.findMany({
          where: { id_cliente: ctx.clientId, id_informacao: id },
        })
      : []
    // ##########################

    const data = {
      ...input,
      sd_finalidade: { connect: { id: input.sd_finalidade.id } },
      id_cliente: ctx.clientId,
      sd_departamento: { connect: { id: input.sd_departamento.id } },
      sd_membro_grupo_informacao: {
        create: input.sd_membro_grupo_informacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_grupo_informacao: { connect: { id: item.id } },
        })),
      },
      ...(origemInformacao && {
        sd_origem_informacao: { connect: { id: origemInformacao.id } },
      }),
      ...(formatoDestino && {
        sd_formato_destino: { connect: { id: formatoDestino.id } },
      }),
    }

    const upsertInfo = await prisma.sd_indicadores
      .upsert({
        where: { id_cliente: ctx.clientId, id: id || 0 },
        update: { ...data },
        create: { ...data },
        select: { id: true },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })
      .then(() =>
        prisma.sd_membro_grupo_informacao.deleteMany({ where: { id: { in: delGrupo.map(x => x.id) } } })
      )

    return upsertInfo
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
      prisma.sd_indicadores
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
  groupUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_grupo_informacao
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

  groupDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_grupo_informacao.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar este grupo')
      })
    ),

  //
  //
  // ###################################################
  originUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_origem_informacao
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

  originDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_origem_informacao.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar esta origem')
      })
    ),

  //
  //
  // ###################################################

  finalidadeUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_finalidade
        .upsert({
          where: { id_cliente: ctx.clientId, id: input.id || 0 },
          update: { nome: input.nome },
          create: { nome: input.nome, id_cliente: ctx.clientId },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao salvar finalidade')
        })
    ),

  finalidadeDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_finalidade.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar finalidade')
      })
    ),

  //
  //
  // ###################################################
  destinationUpsert: privateProcedure
    .input(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_formato_destino
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

  destinationDel: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) =>
      prisma.sd_formato_destino.delete({ where: { id_cliente: ctx.clientId, id: input.id } }).catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao apagar este formato destino')
      })
    ),

  subscribe: privateProcedure.mutation(async ({ ctx, getRawInput }) => {
    const rawInput = await getRawInput()
    const allPeriods = [...rawInput.hour, ...rawInput.day, ...rawInput.week]

    const subscribe = await prisma.sd_periodicidade_meio_comunicacao
      .deleteMany({
        where: { id_cliente: ctx.clientId, id_usuario: ctx.userId, id_indicadores: rawInput.infoId },
      })
      .then(async () => {
        if (rawInput.media.length)
          await prisma.sd_periodicidade_meio_comunicacao.createMany({
            data: rawInput.media.map(m => ({
              id_cliente: ctx.clientId,
              id_usuario: ctx.userId,
              id_indicadores: rawInput.infoId,
              id_meio_comunicacao: m.id,
            })),
          })
        else return true // just unsubscribe
      })
      .then(() =>
        prisma.sd_periodicidade_assinatura.deleteMany({
          where: { id_cliente: ctx.clientId, id_usuario: ctx.userId, id_indicadores: rawInput.infoId },
        })
      )
      .then(async () => {
        if (allPeriods.length)
          await prisma.sd_periodicidade_assinatura.createMany({
            data: allPeriods.map(m => ({
              id_cliente: ctx.clientId,
              id_usuario: ctx.userId,
              id_indicadores: rawInput.infoId,
              id_periodicidade: m.id,
            })),
          })
        else return true // just unsubscribe
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })

    return subscribe
  }),
})

export default infoRouter
