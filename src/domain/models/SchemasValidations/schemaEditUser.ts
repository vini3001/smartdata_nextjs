import * as yup from "yup";

export const schemaEditUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
  birthDate: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
});
