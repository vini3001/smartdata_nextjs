import * as yup from "yup";

export const schemaForgetPassword = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase())
});
