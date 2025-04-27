export const getCompanyParameter = (companyData, value) => {
  if (companyData && companyData.sd_parametros_empresa) {
    return companyData.sd_parametros_empresa.find(param => param.chave === value)?.valor
  }
  return null
}
