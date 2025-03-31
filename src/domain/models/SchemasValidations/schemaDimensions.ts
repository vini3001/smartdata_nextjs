import * as yup from "yup";

export const schemaDimensions = yup.object().shape({
  name_dimension: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  description_dimension: yup
    .string()
});