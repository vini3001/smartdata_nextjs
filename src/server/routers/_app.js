import alertRouter from './alert'
import chatbot from './chatbot'
import companyRouter from './company'
import infoRouter from './info'
import logRouter from './log'
import peopleRouter from './people'
import systemRouter from './system'
import tenantRouter from './tenant'
import { router } from '../trpc'

export const appRouter = router({
  alert: alertRouter,
  chatbot,
  company: companyRouter,
  info: infoRouter,
  log: logRouter,
  people: peopleRouter,
  system: systemRouter,
  tenant: tenantRouter, // tRPC has a bug if I use the name 'client' and then try 'utils.client.x.invalidate()'
})
