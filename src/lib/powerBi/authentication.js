// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------
import { PublicClientApplication, ConfidentialClientApplication } from '@azure/msal-node'

const getAccessToken = async function (
  CLIENTID,
  authority,
  tenantId,
  clientSecret,
  authenticationMode,
  scopeBase,
  pbiUsername,
  pbiPassword
) {
  const msalConfig = {
    auth: {
      clientId: CLIENTID,
      authority: `${authority}${tenantId}`,
      clientSecret: clientSecret || undefined,
    },
  }

  // Check for the MasterUser Authentication
  if (authenticationMode.toLowerCase() === 'masteruser') {
    const clientApplication = new PublicClientApplication(msalConfig)

    const usernamePasswordRequest = {
      scopes: [scopeBase],
      username: pbiUsername,
      password: pbiPassword,
    }

    return clientApplication.acquireTokenByUsernamePassword(usernamePasswordRequest)
  }

  if (authenticationMode.toLowerCase() === 'serviceprincipal') {
    const clientApplication = new ConfidentialClientApplication(msalConfig)

    const clientCredentialRequest = {
      scopes: [scopeBase],
    }

    return clientApplication.acquireTokenByClientCredential(clientCredentialRequest)
  }
}

export default getAccessToken
