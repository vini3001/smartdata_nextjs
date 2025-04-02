import * as yup from "yup";

export const schemaTemplate = yup.object().shape({
  model: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  first_text: yup
    .string()
    .required("Campo obrigatório"),
  second_text: yup
    .string()
    .optional(),
  third_text: yup
    .string()
    .optional()
});