import { z } from 'zod'

import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const chatbot = router({
  //
  // Queries
  // ####################################################################################
  byId: privateProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) =>
    prisma.sd_estrutura_menu.findUnique({
      where: { id_cliente: ctx.clientId, id: input.id },
      select: {
        id: true,
        ativo: true,
        descricao: true,
        tipo_elemento: true,
        tipo_acao: true,
        id_acao: true,
        sd_estrutura_menu: { select: { id: true, descricao: true, tipo_elemento: true } },
      },
    })
  ),

  all: privateProcedure.query(
    ({ ctx }) => prisma.$queryRaw`select * from sd_vw_hierarquia_menu where id_cliente = ${ctx.clientId}`
  ),

  paths: privateProcedure.query(({ ctx }) =>
    prisma.sd_estrutura_menu.findMany({
      where: { id_cliente: ctx.clientId, ativo: true, NOT: { tipo_elemento: 'FINAL' } },
      select: { id: true, descricao: true, tipo_elemento: true },
      orderBy: [{ tipo_elemento: 'desc' }, { descricao: 'asc' }],
    })
  ),

  starters: privateProcedure.query(({ ctx }) =>
    prisma.sd_estrutura_menu.findMany({
      where: { id_cliente: ctx.clientId, ativo: true, tipo_elemento: 'RAIZ' },
      select: { id: true, descricao: true },
      orderBy: { descricao: 'asc' },
    })
  ),

  //
  // Mutations
  // ####################################################################################
  upsert: privateProcedure.mutation(({ ctx, rawInput }) => {
    const { id, sd_estrutura_menu: path, ...input } = rawInput
    input.id_acao = Number(input.id_acao) || null

    // Prisma is not smart enough to ignore the 'update' or 'create' paths depending on the id.
    // Both paths are validated
    return prisma.sd_estrutura_menu
      .upsert({
        where: { id: id || 0 },
        update: {
          ...input,
          sd_estrutura_menu: path ? { connect: { id: path.id } } : { disconnect: true },
        },
        create: {
          ...input,
          id_cliente: ctx.clientId,
          sd_estrutura_menu: path ? { connect: { id: path.id } } : undefined,
        },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })
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
    .mutation(({ input }) =>
      prisma.sd_estrutura_menu
        .update({
          where: { id: input.id },
          data: { ativo: !input.active },
        })
        .catch(err => {
          console.log(`${new Date()} --->>>`, err.message)
          throw Error('Erro ao ativar/inativar')
        })
    ),
})

export default chatbot
