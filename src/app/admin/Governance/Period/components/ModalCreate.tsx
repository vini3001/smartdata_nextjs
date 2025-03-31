import { BaseModal, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaPeriods } from "@/domain/models/SchemasValidations/schemaPeriods";
import DropdownBase from "@/presentation/components/DropdownBase";
import DateTimePickerCustom from "@/presentation/components/DateTimePicker";

interface PeriodProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreatePeriod({isOpen, handleOpenModal}: PeriodProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
        <BaseModal title="Criar Período" opened={isOpen} children={<PeriodBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function PeriodBody({handleOpenModal}: Pick<PeriodProps, "handleOpenModal">) {
    const methods = YupService.useFormYup(schemaPeriods);

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
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome do Indicador', name:"name_Period"}} register={register} error={ErrorField.parseError("name_Period", errors)} />
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                        <DateTimePickerCustom controlCustom={control} containerProps={{ width: '50%' }} handleDate={() => { } } text={'Data Início'} type={"filled"} error={ErrorField.parseError("begin_date", errors)} props={{name: "begin_date"}} />
                        <DateTimePickerCustom controlCustom={control} containerProps={{ width: '50%' }} handleDate={() => { } } text={'Data Final'} type={"filled"} error={ErrorField.parseError("end_date", errors)} props={{name: "end_date"}} />
                    </Box>
                    <DropdownBase props={{name: 'type_Period'}} placeholder="Tipo de Equipe" submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("type_Period", errors)} />
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