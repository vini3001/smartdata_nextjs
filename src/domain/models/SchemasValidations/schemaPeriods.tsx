import * as yup from "yup";

export const schemaPeriods = yup.object().shape({
  name_period: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  begin_date: yup
    .string()
    .required("Campo obrigatório"),
  end_date: yup
    .string()
    .required("Campo obrigatório"),
  period_type: yup
    .string()
    .required("Campo obrigatório"),
  period_subdivision: yup
    .string()
    .required("Campo obrigatório"),
  company: yup
    .string()
    .required("Campo obrigatório")
});