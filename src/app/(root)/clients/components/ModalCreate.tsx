import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box, Divider, Typography } from "@mui/material";
import { ContainerModal, FormContainer, PreviewBox, BoxDownloadIcon, FormButton } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaClients } from "@/domain/models/SchemasValidations/schemaClients";
import React from "react";
import { FileOpen } from "@mui/icons-material";
import { trpc } from "@/lib/trpc";
import useSnack from "@/app/components/hooks/useSnack";
import { useUploadThing } from "@/app/components/Uploadthing/uploadthing";

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

const initialState = {
    ativo: true,
    logo: '',
    nome: '',
    nome_abreviado: '',
    documento: '',
    endereco: '',
    cidade: '',
    estado: '',
    contato_nome: '',
    contato_email: '',
    contato_telefone: '',
    nomeUsuario: '',
    email: '',
    password: '',
  }

function ClientsBody({handleOpenModal}: Pick<ClientsProps, "handleOpenModal">) {
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);
    const [nome, setNome] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [senha, setSenha] = React.useState<string>('')
    const [state, setState] = React.useState(initialState)
    const methods = YupService.useFormYup(schemaClients);
    const utils = trpc.useUtils()
    const openSnack = useSnack()

    const {
    handleSubmit,
    getValues,
    setValue,
    register,
    control,
    formState: { errors },
    } = methods;

    const handleClose = () => {
        handleOpenModal()
    }

    const { mutate } = trpc.tenant.upsert.useMutation({
    onSuccess: () => {
        utils.tenant.all.invalidate()
        openSnack('Sucesso!', 'success')
        handleClose()
    },
        onError: (err) => openSnack(err.message, 'error'),
    })

    const onSubmit = async (_event: React.FormEvent<HTMLFormElement>) => {
        console.log(getValues())
        mutate(getValues())
    };

    const { startUpload, isUploading } = useUploadThing('logoUploader', {
        onClientUploadComplete: (res: any) => {
            setValue('logo', res[0]?.url)
            openSnack('Sucesso!', 'success')
    },
        onUploadError: () => {openSnack('Nao foi possivel salvar esta imagem', 'error')},
        onUploadBegin: () => setValue('logo',''),
    })

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
        const reader = new FileReader()
        startUpload([file])
        reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
        };

        reader.readAsDataURL(file)
    }
    };

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', gap: '0.7rem'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '66%', gap: '0.7rem'}}>
                        <Box sx={{display: 'flex', width: '100%', gap: '0.7rem'}}>
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', gap: '0.7rem'}}>
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome Abreviado', name:"nome_abreviado"}} register={register} error={ErrorField.parseError("nome_abreviado", errors)} />
                            <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Documento', name:"documento"}} register={register} error={ErrorField.parseError("documento", errors)} />
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
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Endereço', name:"endereco"}} register={register} error={ErrorField.parseError("endereco", errors)} /> 
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Cidade', name:"cidade"}} register={register} error={ErrorField.parseError("cidade", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Estado', name:"estado"}} register={register} error={ErrorField.parseError("estado", errors)} />
                </Box>    
                <Box sx={{display: 'grid', gridTemplateColumns: '66% 1fr 1fr', gap: '0.7rem'}}>
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome do Contato', name:"contato_nome"}} register={register} error={ErrorField.parseError("contato_nome", errors)} /> 
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Email do Contato', name:"contato_email"}} register={register} error={ErrorField.parseError("contato_email", errors)} />
                    <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Telefone do Contato', name:"contato_telefone"}} register={register} error={ErrorField.parseError("contato_telefone", errors)} />
                </Box>    
                <Divider />
                <Typography sx={{display: 'flex', fontFamily: 'Oxygen', justifyContent: 'center'}}>Usuário administrador:</Typography>
                <Box sx={{display: 'grid', gridTemplateColumns: '66% 1fr 1fr', gap: '0.7rem'}}>
                    <TextField props={{required: true, value: nome, error: nome === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setNome(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nomeUsuario"}} register={register} error={ErrorField.parseError("nomeUsuario", errors)} /> 
                    <TextField props={{required: true, value: email, error: email === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Login (email)', name:"email"}} register={register} error={ErrorField.parseError("email", errors)} />
                    <TextField props={{required: true, value: senha,  error: senha === '' ? true : false, onChange: (event: React.ChangeEvent<HTMLInputElement>) => {setSenha(event.target.value)}, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Definir nova senha?', name:"password"}} register={register} error={ErrorField.parseError("password", errors)} />
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
