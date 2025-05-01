import { TRPCError, initTRPC } from '@trpc/server'

import { getTokenCookie } from '@/lib/auth'
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create()

const isAuthed = t.middleware(({ next, ctx }) => {
  const { userId, clientId } = getTokenCookie(ctx) || ''
  if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' })

  return next({ ctx: { userId, clientId } })
})

// Base router and procedure helpers
export const { router } = t
export const { procedure } = t
export const privateProcedure = t.procedure.use(isAuthed)
