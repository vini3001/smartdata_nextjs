import * as yup from "yup";

export const schemaPeople = yup.object().shape({
  id: yup
    .number()
    .nullable(),
  nome: yup
    .string()
    .required("Campo obrigatório")
    .transform((value) => value.toLowerCase()),
  ativo: yup
    .boolean()
    .required("Campo obrigatório"),
  sd_cargo: yup
    .object()
    .required("Campo obrigatório"),
  sd_departamento: yup
    .object()
    .required("Campo obrigatório"),
  sd_meio_comunicacao_pessoa: yup
    .array()
    .of(
      yup.object()
    )
    .required("Campo obrigatório"),
  sd_membro_grupo_pessoa: yup
    .array()
    .of(
      yup.object().shape({})
    )
    .required("Campo obrigatório")
    .min(1, 'Adicione pelo menos um meio de comunicação'),
  sd_pessoa_grupo_informacao: yup
    .array()
    .of(
      yup.object().shape({})
    )
    .required("Campo obrigatório"),
  sd_pessoa_informacao: yup
    .array()
    .of(
      yup.object().shape({})
    )
    .required("Campo obrigatório"),
  sd_pessoa_local_empresa: yup
    .array()
    .of(
      yup.object().shape({})
    )
    .required("Campo obrigatório"),
  sd_pessoa_menu: yup
    .array()
    .of(
      yup.object().shape({})
    )
    .required("Campo obrigatório"),
  sd_usuario: yup
    .object({
        ativo: yup.boolean().required('Tipo é obrigatório'),
        email: yup.string().default('teste@gmail.com').required('O email é obrigatório'),
        perfil_usuario: yup.string().required('O perfil é obrigatório')
      })
    .required("Campo obrigatório"),
});