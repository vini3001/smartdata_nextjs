import { BaseModal, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import DropdownBase from "@/presentation/components/DropdownBase";

interface TeamProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateTeam({isOpen, handleOpenModal}: TeamProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
        <BaseModal title="Criar Equipe" opened={isOpen} children={<TeamBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function TeamBody({handleOpenModal}: Pick<TeamProps, "handleOpenModal">) {
    const methods = YupService.useFormYup(schemaTeams);

    const {
    handleSubmit,
    register,
    formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        handleOpenModal()
    };

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome do Indicador', name:"name_Team"}} register={register} error={ErrorField.parseError("name_Team", errors)} />
                    <DropdownBase props={{name: 'name_team'}} placeholder="Nome" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("name_team", errors)} />
                    <DropdownBase props={{name: 'type_team'}} placeholder="Tipo de Equipe" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("type_team", errors)} />
                    <DropdownBase props={{name: 'department'}} placeholder="Departamentos" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("department", errors)} />
                    <DropdownBase props={{name: 'people'}} placeholder="Pessoas" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("people", errors)} />
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