import * as yup from "yup";

export const schemaGoals = yup.object().shape({
  name_goal: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  indicator_goal: yup
    .string()
    .required("Campo obrigatório"),
  sense_goal: yup
    .string()
    .required("Campo obrigatório"),
  bol_manual_launch: yup
    .boolean()
    .required("Campo obrigatório"),
  bol_fca: yup
    .boolean()
    .required("Campo obrigatório"),
  company: yup
    .string()
    .required("Campo obrigatório"),
  team: yup
    .string()
    .required("Campo obrigatório"),
});