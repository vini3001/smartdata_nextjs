import * as yup from "yup";

export const schemaCommunication = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  descricao: yup
    .string()
    .required("Campo obrigatório"),
  data_inicio: yup
    .string()
    .required("Campo obrigatório")
});