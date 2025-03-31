import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo 8 caracteres")
    .max(64),
});
