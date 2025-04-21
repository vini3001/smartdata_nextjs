import { BaseModal, Checkbox, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { ArchiveBox, FormButton, ContainerModal, FormContainer, PreviewBox, BoxDownloadIcon, TemplateButton } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaCommunication } from "@/domain/models/SchemasValidations/schemaCommunication";
import DateTimePickerCustom from "@/app/components/DateTimePicker";
import DropdownBase from "@/app/components/DropdownBase";
import { AttachFile, FileOpen, InsertLink } from "@mui/icons-material";
import React from "react";
import ModalCreateTemplate from "./ModalTemplates/ModalCreateTemplate";
import DropdownCheckboxCustom, {top100Films} from "@/app/components/DropdownBase/DropdownCheckboxCustom";

interface CommunicationProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateCommunication({isOpen, handleOpenModal}: CommunicationProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Comunicação" opened={isOpen} children={<CommunicationBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function CommunicationBody({handleOpenModal}: Pick<CommunicationProps, "handleOpenModal">) {
    const [filePreview, setFilePreview] = React.useState<File | null>(null);
    const [fileUrl, setFileUrl] = React.useState<string | undefined>();
    const [isOpenTemplate, setIsOpenTemplate] = React.useState<boolean>(false)
    const methods = YupService.useFormYup(schemaCommunication);

    const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        handleOpenModal()
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)
    if (file) {
        setFilePreview(file)

        const url = URL.createObjectURL(file);
        setFileUrl(url);
    }
    };

    function handleOpenModalTemplate() {
        setIsOpenTemplate(!isOpenTemplate)
    }
   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Descrição', name:"descricao"}} register={register} error={ErrorField.parseError("descricao", errors)}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                   <DateTimePickerCustom controlCustom={control} containerProps={{ width: '49%' }} handleDate={() => { } } text={'Data e Hora  / Início'} type={"filled"} error={ErrorField.parseError("data_inicio", errors)} props={{name: "data_inicio"}} />
                   <DateTimePickerCustom containerProps={{ width: '49%' }} handleDate={() => { } } text={'Data e Hora  / Início'} type={"filled"} props={{}} />
                </Box>
                <Box sx={{width: 'fit-content'}}>
                    <ArchiveBox>
                        <a>Meio de comunicação</a>
                    </ArchiveBox>
                    <PreviewBox sx={{paddingRight: '19px'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox props={{sx:{padding: '7px'}}} />
                            <a>Email</a>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox props={{sx:{padding: '7px'}}} />
                            <a>Whatsapp</a>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox props={{sx:{padding: '7px'}}} />
                            <a>Teams</a>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox props={{sx:{padding: '7px'}}} />
                            <a>SMS</a>
                        </Box>
                    </PreviewBox>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
                    <DropdownBase props={{}} placeholder="Intervalo de Repetição" submenu={[]} handleReturnValue={() => { } } error={ErrorField.parseError("repeat_break", errors)} />
                    <DropdownBase props={{}} placeholder="Tipo  Intervalo  de Repetição" submenu={[]} handleReturnValue={() => { } } error={ErrorField.parseError("repeat_type", errors)} />
                    <DropdownBase props={{}} placeholder="Tipo de Disparo" submenu={['teste1', 'teste2', 'teste3']} handleReturnValue={() => { } } error={ErrorField.parseError("fire_type", errors)} />
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.7rem'}}>
                    <DropdownBase props={{}} searchBar placeholder="Pessoas" submenu={[]} handleReturnValue={() => { } } error={ErrorField.parseError("data_inicio", errors)} />
                    <DropdownCheckboxCustom OptionsList={top100Films} props={{}} placeholder={""} />
                </Box>
                <Box>
                    <ArchiveBox>
                        <a style={{height: 'fit-content'}}>Escolher arquivo: </a>
                        <Box sx={{borderRadius: '100px',  minWidth: 'auto', padding: '3px'}}>
                            <AttachFile sx={{color: '#828DD4'}} />
                        </Box> 
                    </ArchiveBox>
                    <PreviewBox sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <div className="box-file">
                            <input type="file" onChange={handleImageChange}/>
                            {filePreview ? (
                                <BoxDownloadIcon sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', zIndex: '2'}}>
                                    <InsertLink sx={{color: '#828DD4'}} />
                                    <a href={fileUrl} download={filePreview.name}>{filePreview.name}</a>
                                </BoxDownloadIcon>
                            ) : (
                             <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                                <FileOpen sx={{color: '#DCDCDC', fontSize: '30px'}}/>
                                <h4>Anexe ou arraste o arquivo até aqui</h4>
                             </Box>
                            )}
                        </div>
                    </PreviewBox>
                </Box>
                <ArchiveBox>
                        <a style={{height: 'fit-content'}}>Escolher template para envio: </a>
                        <Box sx={{borderRadius: '100px',  minWidth: 'auto', padding: '3px'}}>
                            <TemplateButton onClick={handleOpenModalTemplate} sx={{backgroundColor: '#88D182', color: 'white'}}>CADASTRAR / ESCOLHER MODELO</TemplateButton>
                        </Box> 
                </ArchiveBox>
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
        <ModalCreateTemplate isOpen={isOpenTemplate} handleOpenModal={handleOpenModalTemplate} />
    </ContainerModal>
   )
}