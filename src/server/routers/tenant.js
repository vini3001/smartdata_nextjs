import bcrypt from 'bcryptjs'
import { z } from 'zod'

import prisma from '@/lib/prisma'
import { router, privateProcedure } from '@/server/trpc'

const tenantRouter = router({
  //
  // Queries
  // ####################################################################################
  byId: privateProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
    const data = await prisma.sd_cliente.findUnique({
      where: { id: input.id },
      include: { sd_usuario: { select: { id: true, nome: true, email: true, perfil_usuario: true } } },
    })

    // The first admin user is the one created with the client
    const firstAdmin = data?.sd_usuario
      .filter(u => u.perfil_usuario === 'ADMIN')
      .reduce((prev, curr) => (prev.id < curr.id ? prev : curr), data?.sd_usuario[0])
    delete data?.sd_usuario

    return {
      ...data,
      idUsuario: firstAdmin?.id,
      nomeUsuario: firstAdmin?.nome,
      email: firstAdmin?.email,
    }
  }),

all: privateProcedure.input(
  z.object({
    order: z.string(),
    active: z.boolean(),
    name: z.string().optional(),
    nome_abreviado: z.string().optional(),
    contato_nome: z.string().optional(),
    user_admin: z.string().optional()
  })
).query(async ({ ctx, input }) => {
  const { order, active, name, nome_abreviado, contato_nome, user_admin } = input;

  const data = await prisma.sd_cliente.findMany({
    where: {
      ativo: active,
      nome: { contains: name || '' },
      AND: [
        contato_nome ? { contato_nome: { contains: contato_nome } } : {},
        nome_abreviado ? { nome_abreviado: { contains: nome_abreviado } } : {},
        user_admin ? { sd_usuario: { some: { nome: { contains: user_admin } } } } : {},      ],
    },
    include: {
      sd_usuario: { select: { nome: true } }
    },
    orderBy: { id: order },
  });

  return data;
}),

  

  active: privateProcedure.query(() => prisma.sd_cliente.findMany({ 
    where: { ativo: true },
    orderBy: { id: 'desc' }
  })),

  //
  // Mutations
  // ####################################################################################
  upsert: privateProcedure.mutation(async ({ getRawInput }) => {
    const rawInput = await getRawInput()
    const { id, idUsuario, nomeUsuario, email, password, ...input } = rawInput
    input.documento = Number(input.documento) || null

    // Prisma is not smart enough to ignore the 'update' or 'create' paths depending on the id.
    // Both paths are validated
    const upsertInfo = await prisma.sd_cliente
      .upsert({
        where: { id: id || 0 },
        update: {
          ...input,
          sd_usuario: {
            update: {
              where: { id: idUsuario || 0 },
              data: {
                nome: nomeUsuario,
                email,
                ...(password && { password: await bcrypt.hash(password, 10) }),
              },
            },
          },
        },
        create: {
          ...input,
          sd_usuario: {
            create: {
              perfil_usuario: 'ADMIN',
              nome: nomeUsuario,
              email,
              password: await bcrypt.hash(password || '', 10),
            },
          },
        },
      })
      .catch(err => {
        console.log(`${new Date()} --->>>`, err.message)
        throw Error('Erro ao salvar estes dados')
      })

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
    .mutation(({ input }) =>
      prisma.sd_cliente
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

export default tenantRouter
