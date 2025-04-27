import getAccessToken from '@/lib/powerBi/authentication'

function getAuthHeader(accessToken) {
  // Function to append Bearer against the Access Token
  return 'Bearer '.concat(accessToken)
}

export default async function getRequestHeader(
  clientId,
  authority,
  tenantId,
  clientSecret,
  authenticationMode,
  scopeBase,
  pbiUsername,
  pbiPassword
) {
  // Store authentication token
  let tokenResponse

  // Store the error thrown while getting authentication token
  let errorResponse

  // Get the response from the authentication request
  try {
    tokenResponse = await getAccessToken(
      clientId,
      authority,
      tenantId,
      clientSecret,
      authenticationMode,
      scopeBase,
      pbiUsername,
      pbiPassword
    )
  } catch (err) {
    if ('error_description' in err && 'error' in err) {
      errorResponse = err.error_description
    } else {
      // Invalid PowerBI Username provided
      errorResponse = err.toString()
    }
    return {
      status: 401,
      error: errorResponse,
    }
  }

  // Extract AccessToken from the response
  const token = tokenResponse.accessToken
  return {
    'Content-Type': 'application/json',
    Authorization: getAuthHeader(token),
  }
}
