import { z } from 'zod'

import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const logRouter = router({
  //
  // Queries
  // ####################################################################################
  // byId: privateProcedure
  //   .input(
  //     z.object({
  //       id: z.number(),
  //     })
  //   )
  //   .query(async opts => {
  //     const data = await prisma.sd_log.findUnique({
  //       where: { id: opts.input.id },
  //     })

  //     return data
  //   }),

  all: privateProcedure
    .input(
      z.object({
        begin: z.string(),
        end: z.string(),
        message: z.string(),
        module: z.string(),
        object: z.string(),
        application: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await prisma.sd_usuario.findUnique({
        where: { id_cliente: ctx.clientId, id: ctx.userId },
        select: { perfil_usuario: true },
      })

      const data = await prisma.sd_log.findMany({
        where: {
          id_cliente: ctx.clientId,
          data_log: {
            gte: `${input.begin}T00:00:00.000Z`,
            lte: `${input.end}T23:59:59.999Z`,
          },
          mensagem: { contains: input.message, mode: 'insensitive' },
          modulo: { contains: input.module, mode: 'insensitive' },
          objeto: { contains: input.object, mode: 'insensitive' },
          aplicacao: { contains: input.application, mode: 'insensitive' },
          ...(user?.perfil_usuario === 'USER' && { id_usuario: ctx.userId }),
        },
        orderBy: { data_log: 'desc' },
      })

      return data
    }),

  modules: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.findMany({
      where: { id_cliente: ctx.clientId },
      distinct: ['modulo'],
      select: { modulo: true },
      orderBy: { modulo: 'asc' },
    })
  ),
  objects: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.findMany({
      where: { id_cliente: ctx.clientId },
      distinct: ['objeto'],
      select: { objeto: true },
      orderBy: { objeto: 'asc' },
    })
  ),
  applications: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.findMany({
      where: { id_cliente: ctx.clientId },
      distinct: ['aplicacao'],
      select: { aplicacao: true },
      orderBy: { aplicacao: 'asc' },
    })
  ),

  // For the dashboard
  // #########################
  lastSuccess: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.findFirst({
      where: { id_cliente: ctx.clientId, objeto: 'Sucesso' },
      orderBy: { data_log: 'desc' },
    })
  ),
  lastFailure: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.findFirst({
      where: { id_cliente: ctx.clientId, objeto: 'Falha' },
      orderBy: { data_log: 'desc' },
    })
  ),

  errorCount: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.count({
      where: { id_cliente: ctx.clientId, objeto: 'Falha' },
    })
  ),

  mostActive: privateProcedure.query(({ ctx }) =>
    prisma.sd_log.groupBy({
      by: ['modulo'],
      where: { id_cliente: ctx.clientId, objeto: 'Inicio' },
      _count: { id: true },
    })
  ),

  perDay: privateProcedure.query(async ({ ctx }) => {
    // const tmp =
    //   await prisma.$queryRaw`select date(l.data_log) as days, count(*) from sd_log l where l.objeto = 'Inicio' group by days`
    // await prisma.$queryRaw`select a.data_log:: date, count(*) from sd_log a where a.objeto = 'Inicio' group by a.data_log:: date`
    const last30days = `${new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substring(0, 10)}T00:00:00.000Z`

    const data = await prisma.sd_log.findMany({
      where: {
        id_cliente: ctx.clientId,
        objeto: 'Inicio',
        data_log: { gte: last30days },
      },
      select: { data_log: true },
    })

    const count = data.reduce((tally, item) => {
      const day = item.data_log.toISOString().substring(0, 10).split('-').reverse().join('-')
      tally[day] = (tally[day] || 0) + 1

      return tally
    }, {})

    return count
  }),
})

export default logRouter
