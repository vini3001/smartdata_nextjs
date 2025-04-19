import { BaseModal, FormProvider, RadioButtonGroup } from "@/presentation/components";
import { Box, FormControlLabel, Radio } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, ControlRadioGroup, HeaderBox } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaFCA } from "@/domain/models/SchemasValidations/schemaFCA";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import GridDocument from "@/presentation/components/DataGridCustom/GridDocument";
import React from "react";

interface FCAProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateFCA({isOpen, handleOpenModal}: FCAProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Editar FCA" opened={isOpen} children={<FCABody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function FCABody({handleOpenModal}: Pick<FCAProps, "handleOpenModal">) {
    const [rows, setRows] = React.useState([])
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
                <ControlRadioGroup sx={{display: 'flex', flexDirection:'column'}}>
                    <HeaderBox>
                        <a style={{display: 'flex', flexWrap: 'nowrap'}}>No Prazo</a>
                    </HeaderBox>
                    <Box>
                        <RadioButtonGroup 
                                props={{ name: 'bol_manual_launch' }} 
                                control={control} 
                                error={ErrorField.parseError("bol_manual_launch", errors)} 
                                FormLabel={
                                <>
                                    <FormControlLabel value="true" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Sim" />
                                    <FormControlLabel value="false" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Não" /></>
                                }/>
                    </Box>
                </ControlRadioGroup>
                <ControlRadioGroup sx={{display: 'flex', flexDirection:'column'}}>
                    <HeaderBox>
                        <a style={{display: 'flex', flexWrap: 'nowrap'}}>Com Qualidade</a>
                    </HeaderBox>
                    <Box>
                        <RadioButtonGroup 
                                props={{ name: 'bol_manual_launch' }} 
                                control={control} 
                                error={ErrorField.parseError("bol_manual_launch", errors)} 
                                FormLabel={
                                <>
                                    <FormControlLabel value="true" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Sim" />
                                    <FormControlLabel value="false" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Não" /></>
                                }/>
                    </Box>
                </ControlRadioGroup>
                <ControlRadioGroup sx={{display: 'flex', flexDirection:'column'}}>
                    <HeaderBox>
                        <a style={{display: 'flex', flexWrap: 'nowrap'}}>Com Efetividade</a>
                    </HeaderBox>
                    <Box>
                        <RadioButtonGroup 
                                props={{ name: 'bol_manual_launch' }} 
                                control={control} 
                                error={ErrorField.parseError("bol_manual_launch", errors)} 
                                FormLabel={
                                <>
                                    <FormControlLabel value="true" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Sim" />
                                    <FormControlLabel value="false" control={<Radio sx={{ color: '#828DD4 ', '&.Mui-checked': { color: '#828DD4 ' } }} />} label="Não" /></>
                                }/>
                    </Box>
                </ControlRadioGroup>
            </Box>
            <GridDocument data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
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