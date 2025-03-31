import * as yup from "yup";

export const schemaTeams = yup.object().shape({
  name_team: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  type_team: yup
    .string()
    .required("Campo obrigatório"),
  department: yup
    .string()
    .required("Campo obrigatório"),
  people: yup
    .string()
    .required("Campo obrigatório")
});