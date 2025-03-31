import * as yup from "yup";

export const schemaIndicators = yup.object().shape({
  nome_indicator: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  relevance: yup
    .number()
    .default(0)
    .transform((value) => (isNaN(value) || value === "" ? 0 : Number(value)))
    .required("Campo obrigatório"),
  unit_measure: yup
    .string()
    .required("Campo obrigatório"),
  concept: yup
    .string()
    .required("Campo obrigatório"),
  NRT_Correction: yup
    .string()
    .required("Campo obrigatório"),   
  departments: yup
    .string(),   
  subject: yup
    .string()
    .required("Campo obrigatório"),  
  indicator_type: yup
    .string()
    .required("Campo obrigatório"), 
  indicator_vision: yup
  .string()
  .required("Campo obrigatório"),  
  period: yup
    .number()
    .default(0)
    .transform((value) => (isNaN(value) || value === "" ? 0 : Number(value)))
    .required("Campo obrigatório"), 
  wave: yup
    .number()
    .default(0)
    .transform((value) => (isNaN(value) || value === "" ? 0 : Number(value)))
    .required("Campo obrigatório"), 
  type_vision: yup
    .string()
    .required("Campo obrigatório"), 
  calc_rule: yup
    .string()
    .required("Campo obrigatório"), 
  ripeness: yup
    .number()
    .default(0)
    .transform((value) => (isNaN(value) || value === "" ? 0 : Number(value)))
    .required("Campo obrigatório"), 
  complexity: yup
    .number()
    .default(0)
    .transform((value) => (isNaN(value) || value === "" ? 0 : Number(value)))
    .required("Campo obrigatório"), 
  destiny: yup
    .string()
    .required("Campo obrigatório"), 
  source: yup
    .string()
    .required("Campo obrigatório"), 
  dimension: yup
    .array()
    .required("Campo obrigatório"), 
  information: yup
    .array()
    .required("Campo obrigatório"), 
});