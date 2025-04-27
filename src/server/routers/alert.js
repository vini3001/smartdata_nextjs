import { z } from 'zod'

import { toBrasilISO } from '@/lib/dateUtils'
import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const alertRouter = router({
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
      const data = await prisma.sd_disparo.findUnique({
        where: { id_cliente: ctx.clientId, id: input.id },
        include: {
          sd_disparo_pessoas: {
            select: {
              sd_pessoa: {
                select: {
                  id: true,
                  nome: true,
                  sd_meio_comunicacao_pessoa: { select: { sd_meio_comunicacao: true } },
                },
              },
            },
          },
          sd_disparo_grupo_pessoas: {
            select: {
              sd_grupo_pessoa: {
                select: {
                  id: true,
                  nome: true,
                  sd_membro_grupo_pessoa: {
                    select: {
                      sd_pessoa: {
                        select: { sd_meio_comunicacao_pessoa: { select: { sd_meio_comunicacao: true } } },
                      },
                    },
                  },
                },
              },
            },
          },
          sd_disparo_informacao: { select: { sd_indicadores: { select: { id: true, nome: true } } } },
          sd_disparo_grupo_informacao: { select: { sd_grupo_informacao: true } },
          sd_disparo_meio_comunicacao: {
            select: { sd_meio_comunicacao: { select: { id: true, nome: true } } },
          },
        },
      })

      const data2 = await prisma.sd_meio_comunicacao.findMany({
        where: { id_cliente: ctx.clientId },
        select: { nome: true },
      })
      const medias = data2.map(i => i.nome)

      if (data) {
        data.sd_disparo_pessoas = data.sd_disparo_pessoas.map(i => ({
          id: i.sd_pessoa.id,
          nome: i.sd_pessoa.nome,
          meios: i.sd_pessoa.sd_meio_comunicacao_pessoa?.map(mc => mc.sd_meio_comunicacao.nome),
        }))
        data.sd_disparo_grupo_pessoas = data.sd_disparo_grupo_pessoas.map(i => ({
          id: i.sd_grupo_pessoa.id,
          nome: i.sd_grupo_pessoa.nome,
          meios: medias.filter(media =>
            i.sd_grupo_pessoa.sd_membro_grupo_pessoa.every(p =>
              p.sd_pessoa.sd_meio_comunicacao_pessoa.some(meio => meio.sd_meio_comunicacao.nome === media)
            )
          ),
        }))
        data.sd_disparo_informacao = data.sd_disparo_informacao.map(i => ({ ...i.sd_indicadores }))
        data.sd_disparo_grupo_informacao = data.sd_disparo_grupo_informacao.map(i => ({
          ...i.sd_grupo_informacao,
        }))
        data.sd_disparo_meio_comunicacao = data.sd_disparo_meio_comunicacao.map(i => ({
          ...i.sd_meio_comunicacao,
        }))
      }

      return data
    }),

  all: privateProcedure
    .input(
      z.object({
        order: z.string(),
        active: z.boolean(),
        deploy: z.string(),
        name: z.string(),
        people: z.string(),
        peopleGroup: z.string(),
        info: z.string(),
        infoGroup: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await prisma.sd_usuario.findUnique({
        where: { id_cliente: ctx.clientId, id: ctx.userId },
        select: { perfil_usuario: true, sd_pessoa: { select: { id: true } } },
      })
      const peopleId = user?.sd_pessoa[0]?.id // some users don't have a person associated

      const data = await prisma.sd_disparo.findMany({
        where: {
          id_cliente: ctx.clientId,
          ...(user?.perfil_usuario === 'USER' && {
            OR: [
              { sd_disparo_pessoas: { some: { id_pessoa: peopleId } } },
              {
                sd_disparo_grupo_pessoas: {
                  some: {
                    sd_grupo_pessoa: { sd_membro_grupo_pessoa: { some: { id_pessoa: peopleId } } },
                  },
                },
              },
            ],
          }),
          ativo: input.active,
          ind_deploy: { contains: input.deploy, mode: 'insensitive' },
          nome: { contains: input.name, mode: 'insensitive' },
          ...(input.people !== '' && {
            sd_disparo_pessoas: {
              some: {
                sd_pessoa: { nome: { contains: input.people, mode: 'insensitive' } },
              },
            },
          }),
          ...(input.peopleGroup !== '' && {
            sd_disparo_grupo_pessoas: {
              some: {
                sd_grupo_pessoa: { nome: { contains: input.peopleGroup, mode: 'insensitive' } },
              },
            },
          }),
          ...(input.info !== '' && {
            sd_disparo_informacao: {
              some: {
                sd_indicadores: { nome: { contains: input.info, mode: 'insensitive' } },
              },
            },
          }),
          ...(input.infoGroup !== '' && {
            sd_disparo_grupo_informacao: {
              some: {
                sd_grupo_informacao: { nome: { contains: input.infoGroup, mode: 'insensitive' } },
              },
            },
          }),
        },
        select: {
          id: true,
          nome: true,
          descricao: true,
          ativo: true,
          ind_deploy: true,
          data_hora_inicio: true,
          intervalo_repeticao: true,
          tipo_intervalo_repeticao: true,
          tipo_disparo: true,
        },
        orderBy: { id: input.order },
      })

      return data
    }),

  peopleNamesAndMedia: privateProcedure.query(async ({ ctx }) => {
    const data = await prisma.sd_pessoa.findMany({
      where: { id_cliente: ctx.clientId, ativo: true },
      select: {
        id: true,
        nome: true,
        sd_meio_comunicacao_pessoa: { select: { sd_meio_comunicacao: true } },
      },
      orderBy: { id: 'desc' },
    })

    data.forEach(pessoa => {
      pessoa.meios = pessoa.sd_meio_comunicacao_pessoa?.map(i => i.sd_meio_comunicacao.nome)
      delete pessoa.sd_meio_comunicacao_pessoa
    })

    return data
  }),

  grouPeopleNamesAndMedia: privateProcedure.query(async ({ ctx }) => {
    const data = await prisma.sd_grupo_pessoa.findMany({
      where: { id_cliente: ctx.clientId },
      select: {
        id: true,
        nome: true,
        sd_membro_grupo_pessoa: {
          select: {
            sd_pessoa: { select: { sd_meio_comunicacao_pessoa: { select: { sd_meio_comunicacao: true } } } },
          },
        },
      },
      orderBy: { nome: 'asc' },
    })

    const data2 = await prisma.sd_meio_comunicacao.findMany({
      where: { id_cliente: ctx.clientId },
      select: { nome: true },
    })
    const medias = data2.map(i => i.nome)

    // achar meios de comunicacao em comum entre cada pessoa do grupo
    data.forEach(g => {
      g.meios = medias.filter(media =>
        g.sd_membro_grupo_pessoa.every(p =>
          p.sd_pessoa.sd_meio_comunicacao_pessoa.some(meio => meio.sd_meio_comunicacao.nome === media)
        )
      )

      delete g.sd_membro_grupo_pessoa
    })

    return data
  }),

  // For the dashboard
  // #########################
  activeCount: privateProcedure.query(({ ctx }) =>
    prisma.sd_disparo.groupBy({
      where: { id_cliente: ctx.clientId },
      by: ['ativo'],
      _count: { ativo: true },
    })
  ),
  peopleCount: privateProcedure.query(async ({ ctx }) => {
    const all = await prisma.sd_disparo.findMany({
      where: { id_cliente: ctx.clientId, ativo: true },
      select: {
        sd_disparo_pessoas: { select: { id_pessoa: true } },
        sd_disparo_grupo_pessoas: {
          select: {
            sd_grupo_pessoa: { select: { sd_membro_grupo_pessoa: { select: { id_pessoa: true } } } },
          },
        },
      },
    })

    const agg1 = all.map(disp => disp.sd_disparo_pessoas.map(dp => dp.id_pessoa))
    const agg2 = all.map(disp =>
      disp.sd_disparo_grupo_pessoas.map(dgp =>
        dgp.sd_grupo_pessoa.sd_membro_grupo_pessoa.map(p => p.id_pessoa)
      )
    )
    const final = [...agg1, ...agg2].flat(3)

    return [...new Set(final)].length
  }),

  perMedia: privateProcedure.query(async ({ ctx }) => {
    const data = await prisma.sd_meio_comunicacao.findMany({
      where: { id_cliente: ctx.clientId },
      include: { _count: { select: { sd_disparo_meio_comunicacao: true } } },
    })

    const pieChart = data.map(d => ({
      id: d.id,
      value: d._count.sd_disparo_meio_comunicacao,
      label: d.nome,
    }))

    return pieChart
  }),

  //
  // Mutations
  // ####################################################################################
  upsert: privateProcedure.mutation(async ({ ctx, rawInput }) => {
    const { id, ...input } = rawInput

    // if SelfService, only allow one combination of tipo_intervalo_repeticao and sd_disparo_informacao
    if (input.tipo_disparo === 'S') {
      const alerts = await prisma.sd_disparo.findMany({
        where: { id_cliente: ctx.clientId, ativo: true, tipo_disparo: 'S' },
        select: {
          id: true,
          tipo_disparo: true,
          tipo_intervalo_repeticao: true,
          sd_disparo_informacao: { select: { sd_indicadores: { select: { nome: true } } } },
        },
      })

      alerts.forEach(alert => {
        if (
          alert.id !== id && // not an update of the same entry
          alert.tipo_intervalo_repeticao === input.tipo_intervalo_repeticao &&
          alert.sd_disparo_informacao[0].sd_indicadores.nome === input.sd_disparo_informacao[0].nome
        )
          throw Error('Já existe um alerta com essa combinação de Tipo Intervalo e Informação')
      })
    }

    delete input.id_meio_comunicacao
    delete input.data_criacao

    if (input.data_hora_inicio === '') input.data_hora_inicio = null
    if (input.data_hora_fim === '') input.data_hora_fim = null

    // ##########################
    // Get actual relations and delete then only after the upsert mutation is resolved
    const delMeios = id
      ? await prisma.sd_disparo_meio_comunicacao.findMany({
          where: { id_cliente: ctx.clientId, id_disparo: id },
        })
      : []
    const delPessoas = id
      ? await prisma.sd_disparo_pessoas.findMany({ where: { id_cliente: ctx.clientId, id_disparo: id } })
      : []
    const delGruPessoas = id
      ? await prisma.sd_disparo_grupo_pessoas.findMany({
          where: { id_cliente: ctx.clientId, id_disparo: id },
        })
      : []
    const delInfo = id
      ? await prisma.sd_disparo_informacao.findMany({ where: { id_cliente: ctx.clientId, id_disparo: id } })
      : []
    const delGruInfo = id
      ? await prisma.sd_disparo_grupo_informacao.findMany({
          where: { id_cliente: ctx.clientId, id_disparo: id },
        })
      : []
    // ##########################

    const data = {
      ...input,
      id_cliente: ctx.clientId,
      data_alteracao: toBrasilISO(new Date()),
      ind_deploy: 'N', // every update, change back to 'N'

      sd_disparo_meio_comunicacao: {
        create: input.sd_disparo_meio_comunicacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_meio_comunicacao: { connect: { id: item.id } },
        })),
      },
      sd_disparo_pessoas: {
        create: input.sd_disparo_pessoas.map(item => ({
          id_cliente: ctx.clientId,
          sd_pessoa: { connect: { id: item.id } },
        })),
      },
      sd_disparo_grupo_pessoas: {
        create: input.sd_disparo_grupo_pessoas.map(item => ({
          id_cliente: ctx.clientId,
          sd_grupo_pessoa: { connect: { id: item.id } },
        })),
      },
      sd_disparo_informacao: {
        create: input.sd_disparo_informacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_indicadores: { connect: { id: item.id } },
        })),
      },
      sd_disparo_grupo_informacao: {
        create: input.sd_disparo_grupo_informacao.map(item => ({
          id_cliente: ctx.clientId,
          sd_grupo_informacao: { connect: { id: item.id } },
        })),
      },
    }

    const upsertAlert = await prisma.sd_disparo
      .upsert({
        where: { id: id || 0 },
        update: { ...data },
        create: { ...data, data_criacao: toBrasilISO(new Date()) },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })
      .then(() =>
        prisma.sd_disparo_meio_comunicacao.deleteMany({ where: { id: { in: delMeios.map(x => x.id) } } })
      )
      .then(() => prisma.sd_disparo_pessoas.deleteMany({ where: { id: { in: delPessoas.map(x => x.id) } } }))
      .then(() =>
        prisma.sd_disparo_grupo_pessoas.deleteMany({ where: { id: { in: delGruPessoas.map(x => x.id) } } })
      )
      .then(() => prisma.sd_disparo_informacao.deleteMany({ where: { id: { in: delInfo.map(x => x.id) } } }))
      .then(() =>
        prisma.sd_disparo_grupo_informacao.deleteMany({ where: { id: { in: delGruInfo.map(x => x.id) } } })
      )

    return upsertAlert
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
      prisma.sd_disparo
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

export default alertRouter
