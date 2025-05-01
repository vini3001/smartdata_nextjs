import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, TemplateButton, RegisterBox, ContainerBox } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaPeople } from "@/domain/models/SchemasValidations/schemaPeople";
import DropdownCheckboxCustom from "@/app/components/DropdownBase/DropdownCheckboxCustom";
import React, { ChangeEvent } from "react";
import ModalGridCreate from "./ModalGridCreate";
import CustomSwitchButton from "@/app/components/SwitchButton";
import DropdownBase from "@/app/components/DropdownBase";
import CustomErrorAlert from "@/app/components/AlertComponents/ErrorAlert";
import useSnack from "@/app/components/hooks/useSnack";
import { trpc } from "@/lib/trpc";
import DropdownPositions from "@/app/components/DropdownBase/DropdownList/DropdownPositions";

interface PeopleProps {
    isOpen: boolean
    handleOpenModal: () => void
    isActive?: boolean
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

const initialState =
    {
      "nome": "teste",
      "ativo": true,
      "sd_cargo": {
        "id": 3,
        "nome": "ANALISTA",
        "id_cliente": 1
      },
      "sd_departamento": {
        "id": 7,
        "divisao": "DELIVERY",
        "departamento": "APONTAMENTOS",
        "id_cliente": 1
      },
      "sd_meio_comunicacao_pessoa": [
        {
          "id": "01b483b0-09d5-46ef-96a2-44a99351319e",
          "mediaId": 1,
          "nome": "WHATSAPP",
          "valor": "1999999999"
        }
      ],
      "sd_membro_grupo_pessoa": [],
      "sd_pessoa_grupo_informacao": [],
      "sd_pessoa_informacao": [],
      "sd_pessoa_local_empresa": [],
      "sd_pessoa_menu": [],
      "sd_usuario": {
        "ativo": false,
        "email": "",
        "perfil_usuario": "USER"
      }
    }
  

function PeopleBody({handleOpenModal, isActive}: Pick<PeopleProps, "isActive" | "handleOpenModal">) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isSelected, setIsSelected] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')
    const methods = YupService.useFormYup(schemaPeople);
    const openSnack = useSnack()

    const utils = trpc.useUtils()
    const [state, setState] = React.useState(initialState)

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
      //if (type === 'checkbox') value = event.target.checked ? {} : null
      setState({ ...state, [name]: value })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
       mutate({ ...state })
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{ onChange: handleChange, sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Nome', name: "nome" }} />
                    <DropdownPositions props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Cargo', name: "role" }} register={register} error={ErrorField.parseError("role", errors)} submenu={cargos} 
                                  handleReturnValue={() =>{}} />
                    <DropdownBase props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Departamento', name: "department" }} register={register} error={ErrorField.parseError("department", errors)} submenu={["Financeiro","Recursos Humanos","Tecnologia da Informação","COA","CTT","Moenda","Qualidade"
                                                                                                                                                                                                                                                ]} handleReturnValue={() =>{}} />
                </Box>
                <DropdownCheckboxCustom OptionsList={cargos} props={{ name: 'groups', label: "Grupos" }} control={control} error={ErrorField.parseError("groups", errors)} placeholder={""} limitTags={5} optionLabel={"nome"}/>
                {/* <DropdownCheckboxCustom OptionsList={[{ id: 1, value: 'Matriz' }, { id: 2, value: 'Filial' }]} props={{ name: 'local_enterprise', label: "Local Empresa" }} control={control} error={ErrorField.parseError("local_enterprise", errors)} placeholder={""} limitTags={5} optionLabel={""}/>
                <DropdownCheckboxCustom OptionsList={[{ id: 1, value: 'Dashboards' }, { id: 2, value: 'Dashboards PBI' }, { id: 3, value: 'Dashboards Tableau' }]} props={{ name: 'allowed_information_group', label: "Grupo Informações Permitidas" }} control={control} error={ErrorField.parseError("allowed_information_group", errors)} placeholder={""} limitTags={5} optionLabel={""}/>
                <DropdownCheckboxCustom OptionsList={[{ id: 1, value: "Administrativo -> Tecnologia da Informação -> Dashboard Acompanhamento SD" }, { id: 2, value: "Administrativo -> Tecnologia da Informação -> Matriz de Indicadores" }, { id: 3, value: "Administrativo -> Financeiro -> Média dos Salários por Administração" }, { id: 4, value: "Administrativo -> Tecnologia da Informação -> Mundo do Chá" }
           ]} props={{ name: 'allowed_information', label: "Informações Permitidas" }} control={control} error={ErrorField.parseError("allowed_information", errors)} placeholder={""} limitTags={5} optionLabel={""}/> */}
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
                                size: 'medium', 
                                sx: {  '& .MuiSwitch-thumb': {width: 20, height: 20}, 
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        transform: 'translateX(calc(3rem - 20px - 4px))' },
                                    width: '3rem', height: '1.5rem'}, onChange: handleCheckBox}} />
                            <span style={{flexGrow: 1, marginLeft: '10px'}}>{isSelected ? <>Ativado</> : <>Desativado</>}</span>
                        </Box> 
                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width: '70%', gap: '0.7rem'}}>
                                   <CustomErrorAlert open={isSelected} title="Será enviado um email automático para definição de senha com validade de 1h">
                                        <Box>
                                            <TextField props={{value: text , error: (text === '' && isSelected) ? true : false, required: true, disabled: !isSelected, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, 
                                            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setText(event.target.value)},
                                            label: 'Login de Usuário (email)', name:"department"}} register={register} error={ErrorField.parseError("department", errors)} /> 
                                        </Box>
                                    </CustomErrorAlert>                         
                            <DropdownBase props={{disabled: !isSelected, label: 'Perfil'}} submenu={['Administrador', 'Usuário']} handleReturnValue={() => { } } error={ErrorField.parseError("repeat_break", errors)} />
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
        <ModalGridCreate isOpen={isOpen} handleOpenModal={handleOpenCreateModal} />
    </ContainerModal>
   )
}