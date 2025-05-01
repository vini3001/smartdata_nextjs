import * as yup from "yup";

export const schemaPeople = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  ativo: yup
    .string()
    .required("Campo obrigatório"),
  department: yup
    .string()
    .required("Campo obrigatório"),
  people: yup
    .string()
    .required("Campo obrigatório")
});