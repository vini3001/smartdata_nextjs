import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { cookies } from 'next/headers'
import { appRouter } from "@/server/routers/_app";

const TOKEN_NAME = 'aCSr43ask'

const handler = async (req: Request) => {
  const cookieStore = await cookies()
  const token = cookieStore.get(TOKEN_NAME)?.value

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({token}),
  });
}

export { handler as GET, handler as POST };