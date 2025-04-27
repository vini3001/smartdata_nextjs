import getRequestHeader from '@/lib/powerBi/getRequestHeader'

function getValueByKey(array, key) {
  const item = array.find(obj => key in obj)
  return item ? item[key] : undefined
}

export async function getPagesFromReport(headerValues, params) {
  // const clientId = decrypt(getValueByKey(headerValues, 'clientId'))
  // const authority = decrypt(getValueByKey(headerValues, 'authority'))
  // const tenantId = decrypt(getValueByKey(headerValues, 'tenantId'))
  // const clientSecret = decrypt(getValueByKey(headerValues, 'clientSecret'))
  // const authenticationMode = decrypt(getValueByKey(headerValues, 'authenticationMode'))
  // const scopeBase = decrypt(getValueByKey(headerValues, 'scopeBase'))
  // const pbiUsername = decrypt(getValueByKey(headerValues, 'pbiUsername'))
  // const pbiPassword = decrypt(getValueByKey(headerValues, 'pbiPassword'))

  const clientId = getValueByKey(headerValues, 'clientId')
  const authority = getValueByKey(headerValues, 'authority')
  const tenantId = getValueByKey(headerValues, 'tenantId')
  const clientSecret = getValueByKey(headerValues, 'clientSecret')
  const authenticationMode = getValueByKey(headerValues, 'authenticationMode')
  const scopeBase = getValueByKey(headerValues, 'scopeBase')
  const pbiUsername = getValueByKey(headerValues, 'pbiUsername')
  const pbiPassword = getValueByKey(headerValues, 'pbiPassword')

  try {
    const groups = await getPagesByReportId(
      params.groupId,
      params.reportId,
      clientId,
      authority,
      tenantId,
      clientSecret,
      authenticationMode,
      scopeBase,
      pbiUsername,
      pbiPassword
    )
    return { status: 200, data: groups.value }
  } catch (error) {
    console.error('Error getting PowerBI groups:', error)
    return {
      status: error.status || 500,
      error: error.statusText || 'Internal Server Error',
    }
  }
}

/**
 * Get embed params for a single report for a single workspace
 * @param {string} groupId
 * @param {string} reportId
 * @param {string} clientId - Optional Parameter
 * @param {string} authority - Optional Parameter
 * @param {string} tenantId - Optional Parameter
 * @param {string} clientSecret - Optional Parameter
 * @param {string} authenticationMode - Optional Parameter
 * @param {string} scopeBase - Optional Parameter
 * @param {string} pbiUsername - Optional Parameter
 * @param {string} pbiPassword - Optional Parameter
 * @return EmbedConfig object
 */
async function getPagesByReportId(
  groupId,
  reportId,
  clientId,
  authority,
  tenantId,
  clientSecret,
  authenticationMode,
  scopeBase,
  pbiUsername,
  pbiPassword
) {
  const reportPagesApi = `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}/pages`

  const headers = await getRequestHeader(
    clientId,
    authority,
    tenantId,
    clientSecret,
    authenticationMode,
    scopeBase,
    pbiUsername,
    pbiPassword
  )

  const result = await fetch(reportPagesApi, {
    method: 'GET',
    headers,
  })

  if (!result.ok) {
    throw result
  }

  return result.json()
}
