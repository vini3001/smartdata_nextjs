import { BaseModal, FormProvider, TextField } from "@/presentation/components";
import { Box, Divider, Typography } from "@mui/material";
import { ContainerModal, FormContainer, PreviewBox, BoxDownloadIcon, FormButton } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
///import { schemaClients } from "@/domain/models/SchemasValidations/schemaClients";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import React from "react";
import { FileOpen } from "@mui/icons-material";

interface ClientsProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateClients({isOpen, handleOpenModal}: ClientsProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Criar Grupo de Pessoas" opened={isOpen} children={<ClientsBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function ClientsBody({handleOpenModal}: Pick<ClientsProps, "handleOpenModal">) {
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);
    const [nome, setNome] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [senha, setSenha] = React.useState<string>('')
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

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
        };
        reader.readAsDataURL(file)
    }
    };

    const ListPeople = [
        {id: 0, name: 'Teste'},
        {id: 1, name: 'Teste1'},
        {id: 2, name: 'Teste2'}
    ]

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', gap: '0.7rem'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '66%', gap: '0.7rem'}}>
                        <Box sx={{display: 'flex', width: '100%', gap: '0.7rem'}}>
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', gap: '0.7rem'}}>
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome Abreviado', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Documento', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'center', gap: '0.5rem'}}>
                        <PreviewBox>
                            <div className="box-file">
                                <input className="input-class" type="file" onChange={handleImageChange}/>
                                {imagePreview ? (
                                    <BoxDownloadIcon sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', zIndex: '2'}}>
                                        <img id="preview" src={imagePreview} />
                                    </BoxDownloadIcon>
                                ) : (
                                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                                    <FileOpen sx={{color: '#DCDCDC', fontSize: '30px'}}/>
                                    <h4>Logo</h4>
                                    </Box>
                                )}
                            </div>
                        </PreviewBox>
                    </Box>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '66% 1fr 1fr', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Endereço', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} /> 
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Cidade', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Estado', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                </Box>    
                <Box sx={{display: 'grid', gridTemplateColumns: '66% 1fr 1fr', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome do Contato', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} /> 
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Email do Contato', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Telefone do Contato', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                </Box>    
                <Divider />
                <Typography sx={{display: 'flex', fontFamily: 'Oxygen', justifyContent: 'center'}}>Usuário administrador:</Typography>
                <Box sx={{display: 'grid', gridTemplateColumns: '66% 1fr 1fr', gap: '0.7rem'}}>
                    <TextField props={{required: true, value: nome, error: nome === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setNome(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} /> 
                    <TextField props={{required: true, value: email, error: email === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Login (email)', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <TextField props={{required: true, value: senha,  error: senha === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setSenha(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Definir nova senha?', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
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