import { useCallback } from 'react'

import { getCompanyParameter } from '@/helpers/utils/getCompanyParameters'

const useFetchPowerBiPages = (activeCompany, workspaceId, reportId) =>
  useCallback(async () => {
    if (!activeCompany || !workspaceId || !reportId) return []

    const clientId = getCompanyParameter(activeCompany, 'CLIENTID')
    const authority = getCompanyParameter(activeCompany, 'AUTHORITYURL')
    const tenantId = getCompanyParameter(activeCompany, 'TENANTID')
    const clientSecret = getCompanyParameter(activeCompany, 'CLIENTSECRET')
    const authenticationMode = getCompanyParameter(activeCompany, 'AUTHENTICATIONMODE')
    const scopeBase = getCompanyParameter(activeCompany, 'SCOPEBASE')
    const pbiUsername = getCompanyParameter(activeCompany, 'PBIUSERNAME')
    const pbiPassword = getCompanyParameter(activeCompany, 'PBIPASSWORD')

    try {
      const response = await fetch(
        `/api/getPowerBiPagesByReport?groupId=${workspaceId}&reportId=${reportId}`,
        {
          headers: {
            'Client-Id': clientId,
            'Authority-Url': authority,
            'Tenant-Id': tenantId,
            'Client-Secret': clientSecret,
            'Authentication-Mode': authenticationMode,
            'Scope-Base': scopeBase,
            'Pbi-Username': pbiUsername,
            'Pbi-Password': pbiPassword,
          },
        }
      )
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  }, [activeCompany, workspaceId, reportId])

export default useFetchPowerBiPages
