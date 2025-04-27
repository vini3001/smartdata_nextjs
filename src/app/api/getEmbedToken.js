import { getPowerBiHeaders } from '@/helpers/utils/getPowerBiHeaders'
import { getEmbedInfo } from '@/lib/powerBi/embedConfigService'

export default async function handler(req, res) {
  const headerValues = getPowerBiHeaders(req)

  const result = await getEmbedInfo(req.query, headerValues)
  res.status(result.status).send(result)
}
