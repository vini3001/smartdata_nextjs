import * as yup from "yup";

export const schemaEnterprise = yup.object().shape({
  id: yup
    .number()
    .nullable(),
  nome: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  id_cliente: yup
    .boolean()
    .required("Campo obrigatório"),
  razaosocial: yup
    .object()
    .required("Campo obrigatório")
});