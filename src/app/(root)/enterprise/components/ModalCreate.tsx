import { BaseModal, FormProvider, TextField } from "@/app/components";
import { Box } from "@mui/material";
import { FormButton, ContainerModal, FormContainer } from "./styles";
import { ErrorField, YupService } from "@/domain/services";
import { schemaEnterprise } from "@/domain/models/SchemasValidations/schemaEnterprise";
import React from "react";
import GridParameters from "@/app/components/DataGridCustom/GridParameters";
import GridEnterprise from "@/app/components/DataGridCustom/GridEnterprise";

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

const initialState = {
    id_cliente_empresa: '',
    nome: '',
    razaosocial: '',
    ativo: true,
    sd_localempresa: [],
    sd_parametros_empresa: [],
  }

function EnterpriseBody({handleOpenModal}: Pick<EnterpriseProps, "handleOpenModal">) {
    const [state, setState] = React.useState(initialState)
    const methods = YupService.useFormYup(schemaEnterprise);

    const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        handleOpenModal()
    };

    const liftMediaLocal = (media: any) => {
        setValue('sd_localempresa', media)
        setState({ ...state, sd_localempresa: media })
    }

    const liftMediaParameters = (media: any) => {
        setValue('sd_parametros_empresa', media)
        setState({ ...state, sd_parametros_empresa: media })
    }

   return (
    <ContainerModal>
        <FormProvider methods={methods}>
            <FormContainer onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.7rem'}}>
                    <TextField style={{flexGrow: 1}} props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Nome', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                    <TextField style={{width: '10rem', justifyContent: 'end'}} props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'ID do cliente', name:"id_cliente"}} register={register} error={ErrorField.parseError("id_cliente", errors)}/>
                </Box>
                <TextField props={{required: true, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, label: 'Razão Social', name:"nome"}} register={register} error={ErrorField.parseError("nome", errors)} />
                <GridEnterprise 
                  liftMedia={liftMediaLocal}
                  setEditing={() => {}}
                  localEmpresa={state.sd_localempresa} />
                <GridParameters 
                  liftMedia={liftMediaParameters}
                  setEditing={() => {}}
                  parametros={state.sd_parametros_empresa} />
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