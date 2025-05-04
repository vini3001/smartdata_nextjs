import * as yup from "yup";

export const schemaClients = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  nome_abreviado: yup
    .string()
    .required("Campo obrigatório"),
  documento: yup
    .string()
    .required("Campo obrigatório"),
  endereco: yup
    .string()
    .required("Campo obrigatório"),
  cidade: yup
    .string()
    .required("Campo obrigatório"),
  estado: yup
    .string()
    .required("Campo obrigatório"),
  contato_nome: yup
    .string()
    .required("Campo obrigatório"), 
  contato_email: yup
    .string()
    .required("Campo obrigatório"), 
  contato_telefone: yup
    .string()
    .required("Campo obrigatório"),  
  nomeUsuario: yup
    .string()
    .required("Campo obrigatório"),
  email: yup
    .string()
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório"),
});