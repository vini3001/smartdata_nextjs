import { BaseModal, DynamicTabs, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaInformation } from "@/domain/models/SchemasValidations/schemaInformation";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import DropdownBase from "@/presentation/components/DropdownBase";
import DropdownCheckboxCustom from "@/presentation/components/DropdownBase/DropdownCheckboxCustom";

interface InformationProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateInformation({isOpen, handleOpenModal}: InformationProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Informação" opened={isOpen} children={<InformationBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function InformationBody({handleOpenModal}: Pick<InformationProps, "handleOpenModal">) {

   return (
    <DynamicTabs tabprops={{sx: {width: '100%'}}} tabs={[
        {name: 'Interno', content: <InternalOption handleOpenModal={handleOpenModal} />},
        {name: 'Compartilhado', content: <SharedOption handleOpenModal={handleOpenModal} />},
        {name: 'Dedicado', content: <DedicatedOption handleOpenModal={handleOpenModal} />}
    ]} />  
   )
}

function InternalOption({handleOpenModal}: Pick<InformationProps, "handleOpenModal">) {
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
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Descrição', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Departamento"}} submenu={["Administrativo - Financeiro","Administrativo - Recursos Humanos","Administrativo - Tecnologia da Informação","Agrícola - COA","Agrícola - CTT","Indústria - Moenda", "Indústria - Qualidade"
                  ]} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownCheckboxCustom props={{ name: 'indicator_goal', label: "Grupos" }} OptionsList={[{ id: 1, value: 'Dashboards' }, { id: 2, value: 'Dashboards PBI' }, { id: 3, value: 'Dashboards Tableau' }]} register={register} error={ErrorField.parseError("indicator_goal", errors)} placeholder={""} control={undefined} />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Finalidade"}} submenu={['BI Integrado', 'SmartData']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownBase props={{name: 'indicator_goal', label: "Origem"}} submenu={["AMAZONS3","DATABASE","POWER BI ONLINE","SAP ANALYTICS CLOUD","SHAREPOINT","TABLEAU"
                 ]} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
            </Box>
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

function SharedOption({handleOpenModal}: Pick<InformationProps, "handleOpenModal">) {
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
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Descrição', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Departamento"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownBase props={{name: 'indicator_goal', label: "Grupos"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Finalidade"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownBase props={{name: 'indicator_goal', label: "Origem"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
            </Box>
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

function DedicatedOption({handleOpenModal}: Pick<InformationProps, "handleOpenModal">) {
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
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Descrição', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Departamento"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownBase props={{name: 'indicator_goal', label: "Grupos"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                <DropdownBase props={{name: 'indicator_goal', label: "Finalidade"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                <DropdownBase props={{name: 'indicator_goal', label: "Origem"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
            </Box>
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