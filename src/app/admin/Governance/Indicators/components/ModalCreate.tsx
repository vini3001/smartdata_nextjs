import { BaseModal, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaIndicators } from "@/domain/models/SchemasValidations/schemaIndicators";
import DropdownBase from "@/presentation/components/DropdownBase";
import DropdownCheckboxCustom, { top100Films } from "@/presentation/components/DropdownBase/DropdownCheckboxCustom";
import TextFieldArea from "@/presentation/components/TextFields/TextFieldArea";

interface IndicatorProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateIndicator({isOpen, handleOpenModal}: IndicatorProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Indicador" opened={isOpen} children={<IndicatorBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function IndicatorBody({handleOpenModal}: Pick<IndicatorProps, "handleOpenModal">) {
    const methods = YupService.useFormYup(schemaIndicators);

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
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome do Indicador', name:"nome_indicator"}} register={register} error={ErrorField.parseError("nome_indicator", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Relevância', name:"relevance"}} register={register} error={ErrorField.parseError("relevance", errors)}/>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Un. Medida', name:"unit_measure"}} register={register} error={ErrorField.parseError("unit_measure", errors)}/>
                </Box>
                <Box>
                    <TextFieldArea props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important', paddingTop: '11px'}}, placeholder: 'Conceito', name:"concept"}} register={register} error={ErrorField.parseError("concept", errors)}/>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <DropdownBase props={{name: 'NRT_Correction'}} placeholder="Correção NRT" submenu={['Sim', 'Não']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("NRT_Correction", errors)} />
                    <DropdownBase props={{name: 'departments'}} placeholder="Departamentos" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("departments", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Assunto', name:"subject"}} register={register} error={ErrorField.parseError("subject", errors)}/>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <DropdownBase props={{name: 'indicator_type'}} placeholder="Tipo de Indicador" submenu={['Sim', 'Não']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_type", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Periodicidade', name:"period"}} register={register} error={ErrorField.parseError("period", errors)}/>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Onda', name:"wave"}} register={register} error={ErrorField.parseError("wave", errors)}/>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.7rem'}}>
                    <DropdownBase props={{name: 'indicator_vision'}} placeholder="Tipo de Visão" submenu={['Estratégico', 'Tático', 'Operacional']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_vision", errors)} />
                    <DropdownBase props={{name: 'calc_rule'}} placeholder="Regra de Cálculo" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("calc_rule", errors)} />
                    <DropdownBase props={{name: 'ripeness'}} placeholder="Maturidade" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("ripeness", errors)} />
                    <DropdownBase props={{name: 'complexity'}} placeholder="Complexidade" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("complexity", errors)} />
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Origem', name:"source"}} register={register} error={ErrorField.parseError("source", errors)}/>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Destino', name:"destiny"}} register={register} error={ErrorField.parseError("destiny", errors)}/>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                    <DropdownCheckboxCustom OptionsList={top100Films} placeholder={"Dimensões"} props={{name: 'dimension'}} register={register} error={ErrorField.parseError("dimension", errors)}/>
                    <DropdownCheckboxCustom OptionsList={top100Films} placeholder={"Informação"} props={{name: 'information'}} register={register} error={ErrorField.parseError("information", errors)}/>
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