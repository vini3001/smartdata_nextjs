export const getPowerBiHeaders = req => [
  { authority: req.headers['authority-url'] },
  { tenantId: req.headers['tenant-id'] },
  { clientId: req.headers['client-id'] },
  { clientSecret: req.headers['client-secret'] },
  { authenticationMode: req.headers['authentication-mode'] },
  { scopeBase: req.headers['scope-base'] },
  { pbiUsername: req.headers['pbi-username'] },
  { pbiPassword: req.headers['pbi-password'] },
]
