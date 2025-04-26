import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, TemplateButton, RegisterBox, ContainerBox, LabelPeople, DeleteButton, CustomContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaGroup } from "@/domain/models/SchemasValidations/schemaGroup";
import DropdownCheckboxCustom, {top100Films} from "@/app/components/DropdownBase/DropdownCheckboxCustom";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import React from "react";
import CustomSwitchButton from "@/app/components/SwitchButton";
import DropdownBase from "@/app/components/DropdownBase";
import CustomErrorAlert from "@/app/components/AlertComponents/ErrorAlert";
import { Delete, PersonAdd } from "@mui/icons-material";
import AddPeople from "./ModalAddPeople";

interface GroupProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateGroup({isOpen, handleOpenModal}: GroupProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Grupo de Pessoas" opened={isOpen} children={<GroupBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function GroupBody({handleOpenModal}: Pick<GroupProps, "handleOpenModal">) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isSelected, setIsSelected] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')
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

    function handleOpenCreateModal() {
        setIsOpen(!isOpen)
    }

    function handleCheckBox() {
        setIsSelected(!isSelected)
    }

    const ListPeople = [
        {id: 0, name: 'Teste'},
        {id: 1, name: 'Teste1'},
        {id: 2, name: 'Teste2'}
    ]

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', maxHeight: '40px', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome do grupo de pessoas', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <FormButton onClick={handleOpenCreateModal} type="submit" sx={{backgroundColor: '#828DD4', color: 'white'}}>
                      <PersonAdd />
                    </FormButton>
                </Box>
                <CustomContainer>
                    {ListPeople.map((item: any) => {
                      return (
                        <Box key={item.id} sx={{display: 'flex', flexDirection: 'row', width: '100%', gap: '0.7rem'}}>
                            <LabelPeople>{item.name}</LabelPeople>
                            <DeleteButton sx={{backgroundColor: '#FF4228', color: 'white'}}>
                                <Delete />
                            </DeleteButton>
                        </Box>
                      )
                    })}
                </CustomContainer>
                <span style={{marginLeft: '0.5rem'}}>Esse grupo tem 0 pessoas incluídas</span>
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
        <AddPeople isOpen={isOpen} handleOpenModal={handleOpenCreateModal} />
    </ContainerModal>
   )
}