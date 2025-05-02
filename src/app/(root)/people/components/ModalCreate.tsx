import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, TemplateButton, RegisterBox } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaPeople } from "@/domain/models/SchemasValidations/schemaPeople";
import DropdownCheckboxCustom from "@/app/components/DropdownBase/DropdownCheckboxCustom";
import React from "react";
import ModalGridCreate from "./ModalGridCreate";
import CustomSwitchButton from "@/app/components/SwitchButton";
import DropdownBase from "@/app/components/DropdownBase";
import CustomErrorAlert from "@/app/components/AlertComponents/ErrorAlert";
import useSnack from "@/app/components/hooks/useSnack";
import { trpc } from "@/lib/trpc";
import DropdownUser from "@/app/components/DropdownBase/DropdownUser/DropdownUser";

interface PeopleProps {
    isOpen: boolean
    handleOpenModal: () => void
    isActive: boolean
}

export default function CreatePeople({isOpen, handleOpenModal}: PeopleProps) {
    const [isActive, setIsActive] = React.useState(false)
    
    function handleActive() {
      setIsActive(!isActive)
    }

    return (
            <BaseModal title="Criar Pessoa" opened={isOpen} children={<PeopleBody handleOpenModal={handleOpenModal} isActive={isActive} />} 
                       closeIcon={false} useSwitch={true} onSwitch={handleActive}/>
    )
}

const initialState = {
  nome: '',
  ativo: true,
  sd_cargo: null,
  sd_departamento: null,
  sd_membro_grupo_pessoa: [],
  sd_pessoa_local_empresa: [],
  sd_pessoa_informacao: [],
  sd_pessoa_grupo_informacao: [],
  sd_pessoa_menu: [],
  sd_meio_comunicacao_pessoa: [],
  sd_usuario: { ativo: false, email: '', perfil_usuario: 'USER' },
}
  

function PeopleBody({handleOpenModal, isActive}: Pick<PeopleProps, "isActive" | "handleOpenModal">) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isSelected, setIsSelected] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')
    const methods = YupService.useFormYup(schemaPeople);
    const openSnack = useSnack()

    const utils = trpc.useUtils()
    const [state, setState] = React.useState(initialState)

    React.useEffect(() => {
      setState({...state, ativo: isActive})
    }, [isActive])

    const { mutate } = trpc.people.upsert.useMutation({
        onSuccess: () => {
          openSnack('Sucesso!', 'success')
          utils.people.all.invalidate()
        },
        onError: err => openSnack(err.message, 'error'),
      })

    const { data: cargos = [] } = trpc.people.positions.useQuery()
    const { data: departamentos = [] } = trpc.people.departments.useQuery()
    const { data: grupoPessoas = [] } = trpc.people.groups.useQuery()
    const { data: localEmpresa = [] } = trpc.company.locals.useQuery()
    const { data: informacoes = [] } = trpc.info.names.useQuery()
    const { data: grupoInformacao = [] } = trpc.info.groups.useQuery()
    const { data: starters = [] } = trpc.chatbot.starters.useQuery()

    const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
    } = methods;

    function handleOpenCreateModal() {
        setIsOpen(!isOpen)
    }

    function handleCheckBox() {
        setIsSelected(!isSelected)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let { type, name, value } = event.target
      setState({ ...state, [name]: value })
    }

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
      let { type, name, checked, value } = event.target

      if (type === 'checkbox') {
        handleCheckBox()
        value = String(event.target.checked)}

      setState({ ...state, sd_usuario: { ...state.sd_usuario, [name]: value } })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       mutate({ ...getValues() })
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{ onChange: handleChange, sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Nome', name: "nome" }}
                    register={register} error={ErrorField.parseError("nome", errors)} />
                    <DropdownBase propsText={{ label: "Cargo" }} props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Cargo', name: "sd_cargo" }} register={register} error={ErrorField.parseError("sd_cargo", errors)}
                  handleReturnValue={handleChange} optionLabel={"nome"} OptionsList={cargos} control={control} />
                    <DropdownBase propsText={{label: "Departamento"}} props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Departamento', name: "sd_departamento" }} register={register} error={ErrorField.parseError("sd_departamento", errors)}
                  handleReturnValue={handleChange } optionLabel={"departamento"} OptionsList={departamentos} control={control} />
                </Box>
                <DropdownCheckboxCustom OptionsList={cargos} props={{ name: 'sd_membro_grupo_pessoa', label: "Grupos" }} control={control} error={ErrorField.parseError("sd_membro_grupo_pessoa", errors)} placeholder={""} limitTags={5} optionLabel={"nome"}/>
                <DropdownCheckboxCustom OptionsList={localEmpresa} props={{ name: 'sd_pessoa_local_empresa', label: "Local Empresa" }} control={control} error={ErrorField.parseError("sd_pessoa_local_empresa", errors)} placeholder={""} limitTags={5} optionLabel={"nomelocal"}/>
                <DropdownCheckboxCustom OptionsList={grupoInformacao} props={{ name: 'sd_pessoa_informacao', label: "Informações" }} control={control} error={ErrorField.parseError("sd_pessoa_informacao", errors)} placeholder={""} limitTags={5} optionLabel={"nome"}/>
                <DropdownCheckboxCustom OptionsList={informacoes} props={{ name: 'sd_pessoa_grupo_informacao', label: "Grupos de Informações" }} control={control} error={ErrorField.parseError("sd_pessoa_grupo_informacao", errors)} placeholder={""} limitTags={5} optionLabel={"nome"}/>
                <DropdownCheckboxCustom OptionsList={starters} props={{ name: 'sd_pessoa_menu', label: "Associar menus do Chatbot" }} control={control} error={ErrorField.parseError("sd_pessoa_menu", errors)} placeholder={""} limitTags={5} optionLabel={"descricao"}/>
                <RegisterBox>
                        <a style={{fontWeight: 400, height: 'fit-content', color: '#6e6e6e'}}>Comunicação: </a>
                        <Box sx={{borderRadius: '100px',  minWidth: 'auto', padding: '3px'}}>
                            <TemplateButton onClick={handleOpenCreateModal} sx={{backgroundColor: '#88D182', color: 'white'}}>CADASTRAR</TemplateButton>
                        </Box> 
                </RegisterBox>
                <RegisterBox>
                        <a style={{fontWeight: 400, height: 'fit-content', color: '#6e6e6e'}}>Usuário: </a>
                        <Box sx={{display: 'flex', flexDirection: 'row', borderRadius: '100px',  minWidth: '9rem', padding: '3px'}}>
                            <CustomSwitchButton props={{
                                name: 'sd_usuario'
,                               size: 'medium', 
                                sx: {  '& .MuiSwitch-thumb': {width: 20, height: 20}, 
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        transform: 'translateX(calc(3rem - 20px - 4px))' },
                                    width: '3rem', height: '1.5rem'}, onChange: handleUser}} />
                            <span style={{flexGrow: 1, marginLeft: '10px'}}>{state.sd_usuario.ativo ? <>Ativado</> : <>Desativado</>}</span>
                        </Box> 
                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width: '70%', gap: '0.7rem'}}>
                                   <CustomErrorAlert open={isSelected} title="Será enviado um email automático para definição de senha com validade de 1h">
                                        <Box>
                                            <TextField props={{value: text , error: (text === '' && isSelected) ? true : false, required: true, disabled: !isSelected, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, 
                                            onChange: handleUser,
                                            label: 'Login de Usuário (email)', name:"sd_usuario.email"}} register={register} error={ErrorField.parseError("sd_usuario.email", errors)} /> 
                                        </Box>
                                    </CustomErrorAlert>                         
                            <DropdownUser props={{ disabled: !isSelected, name: 'sd_usuario.perfil_usuario', label: 'Perfil' }} submenu={[{ id: 1, name: 'Usuário', value: 'USER' }, { id: 2, name: 'Administrador', value: 'ADMIN' }]} handleReturnValue={() => { } } error={ErrorField.parseError("sd_usuario.perfil_usuario", errors)} control={control} />
                        </Box>
                </RegisterBox>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '50%', alignSelf: 'end', gap: '0.5rem'}}>
                    <FormButton type="submit" sx={{backgroundColor: '#828DD4', color: 'white'}}>
                      Salvar
                    </FormButton>
                    <FormButton onClick={handleOpenModal} sx={{color: '#FF4228', borderColor: '#FF4228'}} variant="outlined">
                      Cancelar
                    </FormButton>
                </Box>
            </FormContainer>
        </FormProvider>
        <ModalGridCreate isOpen={isOpen} handleOpenModal={handleOpenCreateModal} handleSetMedia={(media: any) => setState({ ...state, sd_meio_comunicacao_pessoa: media })} />
    </ContainerModal>
   )
}