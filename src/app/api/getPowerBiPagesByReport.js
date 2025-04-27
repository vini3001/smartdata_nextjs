import { getPowerBiHeaders } from '@/helpers/utils/getPowerBiHeaders'
import { getPagesFromReport } from '@/lib/powerBi/getPagesFromReport'

export default async function handler(req, res) {
  const headerValues = getPowerBiHeaders(req)

  try {
    const result = await getPagesFromReport(headerValues, req.query)
    res.status(result.status).send(result.data)
  } catch (error) {
    console.error('Handler Error:', error)
    res.status(500).send({
      status: 500,
      error: 'An unexpected error occurred',
    })
  }
}
