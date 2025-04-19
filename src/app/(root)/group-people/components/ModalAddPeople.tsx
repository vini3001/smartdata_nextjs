import { BaseModal, FormProvider, TextField } from "@/presentation/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer, RegisterBox } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaAddPeople } from "@/domain/models/SchemasValidations/schemaAddPeople";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import React from "react";

interface AddPeopleProps {
    isOpen: boolean
    handleOpenModal: () => void
}

const ListPeople = [
    {id: 0, name: 'Teste'},
    {id: 1, name: 'Teste1'},
    {id: 2, name: 'Teste2'}
]

export default function AddPeople({isOpen, handleOpenModal}: AddPeopleProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Selecionar Pessoas" opened={isOpen} children={<AddPeopleBody handleOpenModal={handleOpenModal} />} onClose={closeModal} />
    )
}

function AddPeopleBody({handleOpenModal}: Pick<AddPeopleProps, "handleOpenModal">) {
    const [selectedOptions, setSelectedOptions] = React.useState<number[]>([]);
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

    function handleSelectOptions(id: number) {
        const newList = [...selectedOptions]

        if (newList.some((item) => (item === id))) {
            const index = newList.findIndex((item) => item === id)
            newList.splice(index, 1)
        } else {
            newList.push(id)
        }

        setSelectedOptions(newList)
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', maxHeight: '40px', gap: '0.7rem'}}>
                    <TextField 
                        props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, 
                        label: 'Pesquisar', name:"nome"}} 
                        register={register} error={ErrorField.parseError("nome", errors)} />
                </Box>
                <RegisterBox>
                    {ListPeople.map((item: any) => {
                      return (
                            <FormButton onClick={() => handleSelectOptions(item.id)} sx={{fontSize: '1rem', backgroundColor: selectedOptions.includes(item.id) ? '#828DD4' : 'transparent', 
                            justifyContent: 'start', width: '100%', '&.MuiButtonBase-root': {height: '50px'}, color: selectedOptions.includes(item.id) ? 'white' : '#000000'}}>{item.name}</FormButton>
                      ) 
                    })}
                </RegisterBox>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '50%', alignSelf: 'end', gap: '0.5rem'}}>
                    <FormButton onClick={handleOpenModal} type="submit" sx={{backgroundColor: '#828DD4', color: 'white'}}>
                      Confirmar
                    </FormButton>
                </Box>
            </FormContainer>
        </FormProvider>
    </ContainerModal>
   )
}