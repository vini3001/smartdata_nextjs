import { BaseModal, Checkbox, FormProvider, TextField } from "@/app/components";
import { Alert, Box, FormControl, FormControlLabel, FormHelperText, Tooltip, Typography } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, TemplateButton, RegisterBox, ContainerBox } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaPeople } from "@/domain/models/SchemasValidations/schemaPeople";
import DropdownCheckboxCustom, {top100Films} from "@/app/components/DropdownBase/DropdownCheckboxCustom";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import React from "react";
import ModalGridCreate from "./ModalGridCreate";
import CustomSwitchButton from "@/app/components/SwitchButton";
import DropdownBase from "@/app/components/DropdownBase";
import CustomErrorAlert from "@/app/components/AlertComponents/ErrorAlert";

interface PeopleProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreatePeople({isOpen, handleOpenModal}: PeopleProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Pessoa" opened={isOpen} children={<PeopleBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function PeopleBody({handleOpenModal}: Pick<PeopleProps, "handleOpenModal">) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isSelected, setIsSelected] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')
    const methods = YupService.useFormYup(schemaTeams);

    const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        handleOpenModal()
    };

    function handleOpenCreateModal() {
        setIsOpen(!isOpen)
    }

    function handleCheckBox() {
        setIsSelected(!isSelected)
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Nome', name: "nome" }} register={register} error={ErrorField.parseError("nome", errors)} />
                    <DropdownBase props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Cargo', name: "role" }} register={register} error={ErrorField.parseError("role", errors)} submenu={['ANALISTA DE SISTEMAS', 'ANALISTA TRIBUTÁRIO', 'COORDENADOR FINANCEIRO', 'GERENTE AGRÍCOLA']} handleReturnValue={() =>{}} />
                    <DropdownBase props={{ sx: { '.MuiInputBase-root': { borderRadius: '8px', backgroundColor: 'white !important' } }, label: 'Departamento', name: "department" }} register={register} error={ErrorField.parseError("department", errors)} submenu={["Financeiro","Recursos Humanos","Tecnologia da Informação","COA","CTT","Moenda","Qualidade"
                                                                                                                                                                                                                                                ]} handleReturnValue={() =>{}} />
                </Box>
                <DropdownCheckboxCustom OptionsList={[{id: 1, value: 'Grupo de Pessoas A'},{id: 1, value: 'Grupo de Pessoas B'},{id: 1, value: 'Grupo X'}]} props={{ name: 'groups', label: "Grupos" }} control={control} error={ErrorField.parseError("groups", errors)} placeholder={""} limitTags={5}/>
                <DropdownCheckboxCustom OptionsList={[{id: 1, value: 'Matriz'},{id: 2, value: 'Filial'}]} props={{ name: 'local_enterprise', label: "Local Empresa" }} control={control} error={ErrorField.parseError("local_enterprise", errors)} placeholder={""} limitTags={5}/>
                <DropdownCheckboxCustom OptionsList={[{id: 1, value: 'Dashboards'},{id: 2, value: 'Dashboards PBI'}, {id: 3, value: 'Dashboards Tableau'}]} props={{ name: 'allowed_information_group', label: "Grupo Informações Permitidas" }} control={control} error={ErrorField.parseError("allowed_information_group", errors)} placeholder={""} limitTags={5}/>
                <DropdownCheckboxCustom OptionsList={[{id: 1,value: "Administrativo -> Tecnologia da Informação -> Dashboard Acompanhamento SD"},{id: 2,value: "Administrativo -> Tecnologia da Informação -> Matriz de Indicadores"},{id: 3,value: "Administrativo -> Financeiro -> Média dos Salários por Administração"},{id: 4,value: "Administrativo -> Tecnologia da Informação -> Mundo do Chá"}
                 ]} props={{ name: 'allowed_information', label: "Informações Permitidas" }} control={control} error={ErrorField.parseError("allowed_information", errors)} placeholder={""} limitTags={5}/>
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