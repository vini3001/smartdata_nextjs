import { BaseModal, Checkbox, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { ArchiveBox, FormButton, ContainerModal, FormContainer, PreviewBox, BoxDownloadIcon, TemplateButton } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
//import { schemaFires } from "@/domain/models/SchemasValidations/schemaFires";
import DateTimePickerCustom from "@/app/components/DateTimePicker";
import DropdownBase from "@/app/components/DropdownBase";
import { AttachFile, FileOpen, InsertLink } from "@mui/icons-material";
import React from "react";
import ModalCreateTemplate from "./ModalTemplates/ModalCreateTemplate";
import DropdownCheckboxCustom, {top100Films} from "@/app/components/DropdownBase/DropdownCheckboxCustom";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";

interface FiresProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateFires({isOpen, handleOpenModal}: FiresProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Disparo" opened={isOpen} children={<FiresBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function FiresBody({handleOpenModal}: Pick<FiresProps, "handleOpenModal">) {
    const [selectedOption, setSelectedOption] = React.useState<string>('')
    const [isOpenTemplate, setIsOpenTemplate] = React.useState<boolean>(false)
    const [viewList, setViewList] = React.useState<string[]>([])
    const methods = YupService.useFormYup(schemaTeams);

    const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        console.log(data)
        handleOpenModal()
    };

    function handleOpenModalTemplate() {
        if (viewList.length > 0) {
           setIsOpenTemplate(!isOpenTemplate)
        } else {
           setIsOpenTemplate(false)
        }
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Descrição', name:"descricao"}} register={register} error={ErrorField.parseError("descricao", errors)}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                   <DateTimePickerCustom controlCustom={control} containerProps={{ width: '49%' }} handleDate={() => { } } text={'Data e Hora  / Início'} type={"filled"} error={ErrorField.parseError("data_inicio", errors)}
                    props={{name: "data_inicio"}} />
                   <DateTimePickerCustom containerProps={{ width: '49%' }} handleDate={() => { } } text={'Data e Hora  / Início'} type={"filled"}
                    props={{name: "data_fim"}} />
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <TextField props={{ sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Intervalo de Repetição'}} error={ErrorField.parseError("repeat_break", errors)} />
                    <DropdownBase props={{label: 'Tipo Intervalo de Repetição'}} submenu={["Único","Minutos","Horas","Dias","Semanas"
                     ]} handleReturnValue={() => { } } error={ErrorField.parseError("repeat_type", errors)} />
                    <DropdownBase props={{label: 'Tipo de Disparo'}} submenu={['Normal', 'Self-Service', 'Parceiros / Fornecedores']} handleReturnValue={(value: string) => { setSelectedOption(value) } } error={ErrorField.parseError("data_inicio", errors)} />
                </Box>
                <DropdownCheckboxCustom OptionsList={[{id: 1, value: 'Email'},{id: 2, value: 'Teams'},{id: 3, value: 'Whatsapp'}]} props={{ name: 'teste', label: "Meios de Comunicação" }} control={control} error={ErrorField.parseError("people_list", errors)} placeholder={""} />
                {selectedOption !== 'Self-Service' && (
                  <>
                  <DropdownCheckboxCustom OptionsList={[{ id: 1, value: "KAIRO" }, { id: 2, value: "Grupo Whatsapp RISTI" }, { id: 3, value: "VICTOR RAFAEL" }, { id: 4, value: "VINICIUS SALA" }]} props={{ name: 'teste', label: "Pessoas" }} control={control} error={ErrorField.parseError("people_list", errors)} placeholder={""} />
                  <DropdownCheckboxCustom OptionsList={[{ id: 1, value: "GRUPO WHATSAPP" }, { id: 2, value: "TIME DE DADOS" }, { id: 3, value: "TIME DE PROJETOS" }]} props={{ name: 'teste', label: "Grupo Pessoas" }} control={control} error={ErrorField.parseError("people_list", errors)} placeholder={""} />
                  <DropdownCheckboxCustom OptionsList={[{ id: 1, value: 'Dashboards' }, { id: 2, value: 'Dashboards PBI' }, { id: 3, value: 'Dashboards Tableau' }]} props={{ name: 'teste', label: "Grupo Informações" }} control={control} error={ErrorField.parseError("people_list", errors)} placeholder={""} />
                  </>  
                )}
                <DropdownCheckboxCustom OptionsList={[{ id: 1, value: "Matriz de Indicadores" }, { id: 2, value: "Média dos Salários por Administração" }, { id: 3, value: "Mundo do Chá" }, { id: 4, value: "People Analytics - Senior" }, { id: 5, value: "Salários da Administração" }, { id: 6, value: "Tendências Salariais" }]} props={{ name: 'people_list', label: "Informações" }} control={control} error={ErrorField.parseError("people_list", errors)} placeholder={""} />
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
        <ModalCreateTemplate viewList={viewList} isOpen={isOpenTemplate} handleOpenModal={handleOpenModalTemplate} />
    </ContainerModal>
   )
}