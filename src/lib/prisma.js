import { PrismaClient } from '@prisma/client'

import { getAWSSecret } from '@/aws-config'

const { DATABASE_URL } = process.env//.NODE_ENV === 'development' ? process.env : await getAWSSecret()

const prisma =
  global.prisma ||
  new PrismaClient({
    datasources: {
      db: { url: DATABASE_URL },
    },
  })

if (process.env.NODE_ENV === 'development') global.prisma = prisma

// ###########################################################################

export default prisma
