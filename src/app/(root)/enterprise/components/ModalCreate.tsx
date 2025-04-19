import { BaseModal, Checkbox, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
//import { schemaEnterprise } from "@/domain/models/SchemasValidations/schemaEnterprise";
import DateTimePickerCustom from "@/presentation/components/DateTimePicker";
import DropdownBase from "@/presentation/components/DropdownBase";
import React from "react";
import ModalCreateTemplate from "./ModalTemplates/ModalCreateTemplate";
import DropdownCheckboxCustom, {top100Films} from "@/presentation/components/DropdownBase/DropdownCheckboxCustom";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import GridLocal from "@/presentation/components/DataGridCustom/GridLocal";
import GridParameter from "@/presentation/components/DataGridCustom/GridParameters";

interface EnterpriseProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateEnterprise({isOpen, handleOpenModal}: EnterpriseProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Empresa" opened={isOpen} children={<EnterpriseBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function EnterpriseBody({handleOpenModal}: Pick<EnterpriseProps, "handleOpenModal">) {
    const [filePreview, setFilePreview] = React.useState<File | null>(null);
    const [rows, setRows] = React.useState([])
    const [fileUrl, setFileUrl] = React.useState<string | undefined>();
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

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
        setFilePreview(file)

        const url = URL.createObjectURL(file);
        setFileUrl(url);
    }
    };

    function handleOpenModalTemplate() {
        if (viewList.length > 0) {
           setIsOpenTemplate(!isOpenTemplate)
        } else {
           setIsOpenTemplate(false)
        }
    }

    const handleSetModelView = (value: string) => {
        let filteredArray: string[] = viewList

        if (viewList.findIndex((item) => {return item === value}) !== -1) {
            filteredArray = viewList.filter((item) => {return item !== value})
        } else {
            filteredArray.push(value);
        }

        setViewList(filteredArray)
    }
   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.7rem'}}>
                    <TextField style={{flexGrow: 1}} props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <TextField style={{width: '10rem', justifyContent: 'end'}} props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'ID do cliente', name:"descricao"}} register={register} error={ErrorField.parseError("descricao", errors)}/>
                </Box>
                <TextField props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Razão Social', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <GridLocal data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
                <GridParameter data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
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