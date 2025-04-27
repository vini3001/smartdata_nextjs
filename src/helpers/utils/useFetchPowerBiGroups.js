import { useCallback } from 'react'

import { getCompanyParameter } from '@/helpers/utils/getCompanyParameters'

const useFetchPowerBiGroups = activeCompany =>
  useCallback(async () => {
    if (!activeCompany) return []

    const clientId = getCompanyParameter(activeCompany, 'CLIENTID')
    const authority = getCompanyParameter(activeCompany, 'AUTHORITYURL')
    const tenantId = getCompanyParameter(activeCompany, 'TENANTID')
    const clientSecret = getCompanyParameter(activeCompany, 'CLIENTSECRET')
    const authenticationMode = getCompanyParameter(activeCompany, 'AUTHENTICATIONMODE')
    const scopeBase = getCompanyParameter(activeCompany, 'SCOPEBASE')
    const pbiUsername = getCompanyParameter(activeCompany, 'PBIUSERNAME')
    const pbiPassword = getCompanyParameter(activeCompany, 'PBIPASSWORD')

    try {
      const response = await fetch(`/api/getPowerBiGroups`, {
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
      })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  }, [activeCompany])

export default useFetchPowerBiGroups
