import { BaseModal, FormProvider, RadioButton, TextField } from "@/presentation/components";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, HeaderBox, ControlRadioGroup } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaGoals } from "@/domain/models/SchemasValidations/schemaGoals";
import DropdownBase from "@/presentation/components/DropdownBase";

interface GoalProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateGoal({isOpen, handleOpenModal}: GoalProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
        <BaseModal title="Criar Meta" opened={isOpen} children={<GoalBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function GoalBody({handleOpenModal}: Pick<GoalProps, "handleOpenModal">) {
    const methods = YupService.useFormYup(schemaGoals);

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
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome do Indicador', name:"name_goal"}} register={register} error={ErrorField.parseError("name_goal", errors)} />
                    <DropdownBase props={{name: 'indicator_goal'}} placeholder="Indicadores" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("indicator_goal", errors)} />
                    <DropdownBase props={{name: 'sense_goal'}} placeholder="Sentido da Meta" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("sense_goal", errors)} />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '5rem'}}>
                    <ControlRadioGroup sx={{display: 'flex', flexDirection:'column'}}>
                        <HeaderBox>
                            <a style={{display: 'flex', flexWrap: 'nowrap'}}>Permitir Lançamento Manual Realizado</a>
                        </HeaderBox>
                        <Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <RadioGroup defaultValue="no" className="control-body">
                                <RadioButton props={{ name: 'bol_manual_launch' }} control={control} error={ErrorField.parseError("bol_manual_launch", errors)} label="Sim" FormLabel={undefined}/>
                            </RadioGroup>
                            </Box>
                        </Box>
                    </ControlRadioGroup>
                    <ControlRadioGroup sx={{display: 'flex', flexDirection:'column'}}>
                        <HeaderBox>
                            <a>Requer FCA</a>
                        </HeaderBox>
                        <Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <RadioGroup defaultValue="no">
                                <FormControlLabel value="yes" control={<Radio sx={{color: '#828DD4 ', '&.Mui-checked': {  color: '#828DD4 '}}} />} label="Sim" />
                                <FormControlLabel value="no" control={<Radio sx={{color: '#828DD4 ', '&.Mui-checked': {  color: '#828DD4 '}}} />} label="Não" />
                            </RadioGroup>
                            </Box>
                        </Box>
                    </ControlRadioGroup>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.7rem'}}>
                    <DropdownBase props={{name: 'company'}} placeholder="Empresa" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("company", errors)} />
                    <DropdownBase props={{name: 'teams'}} placeholder="Equipes" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("teams", errors)} />
                    <DropdownBase props={{name: 'period'}} placeholder="Períodos" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("period", errors)} />
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