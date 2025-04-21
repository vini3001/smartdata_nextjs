import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box, Button, Typography } from "@mui/material";
///import { schemaLaunch } from "@/domain/models/SchemasValidations/schemaLaunch";
import { ContainerModal, FormButton, FormContainer } from "./styles";
import DropdownBase from "@/app/components/DropdownBase";
import { ErrorField, YupService } from "@/domain/services";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import DateTimePickerCustom from "@/app/components/DateTimePicker";

interface LaunchProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateLaunchManual({isOpen, handleOpenModal}: LaunchProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Cadastro Lançamento de Metas" opened={isOpen} children={<LaunchBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function LaunchBody({handleOpenModal}: Pick<LaunchProps, "handleOpenModal">) {
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

   return (
    <ContainerModal sx={{paddingTop: '1rem !important'}}>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Meta"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Data Lançamento', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Versão', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Departamento"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Período', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Valor Previsto', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DateTimePickerCustom controlCustom={control} handleDate={() => { } } text={'Data e Hora Inicial Período'} type={"filled"} error={ErrorField.parseError("data_inicio", errors)}
                       props={{ name: "data_inicio" }} containerProps={undefined} />
                <DateTimePickerCustom controlCustom={control} handleDate={() => { } } text={'Data e Hora Final Período'} type={"filled"} error={ErrorField.parseError("data_inicio", errors)}
                       props={{ name: "data_inicio" }} containerProps={undefined} />
            </Box>
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Usuário Cadastro', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
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
    </ContainerModal>
   )
}