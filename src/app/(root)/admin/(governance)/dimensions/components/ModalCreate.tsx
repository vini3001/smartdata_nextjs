import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaDimensions } from "@/domain/models/SchemasValidations/schemaDimensions";
import TextFieldArea from "@/app/components/TextFields/TextFieldArea";

interface DimensionProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateDimension({isOpen, handleOpenModal}: DimensionProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
        <BaseModal title="Criar Dimensão" opened={isOpen} children={<DimensionBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function DimensionBody({handleOpenModal}: Pick<DimensionProps, "handleOpenModal">) {
    const methods = YupService.useFormYup(schemaDimensions);

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
                <Box sx={{display: 'flex', width: '100%'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome do Indicador', name:"name_dimension"}} register={register} error={ErrorField.parseError("name_dimension", errors)} />
                </Box>
                <Box sx={{display: 'flex', width: '100%'}}>
                    <TextFieldArea props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important', paddingTop: '11px'}}, placeholder: 'Descrição', name:"description_dimension"}} register={register} error={ErrorField.parseError("description_dimension", errors)}/>
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