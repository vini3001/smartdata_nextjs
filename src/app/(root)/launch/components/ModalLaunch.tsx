import { BaseModal } from "@/app/components";
import { Box, Button, Typography } from "@mui/material";
///import { schemaLaunch } from "@/domain/models/SchemasValidations/schemaLaunch";
import { Container } from "../styles";
import React from "react";
import CreateLaunchManual from "./ModalLaunchManual";
import CreateLaunchApi from "./ModalLaunchApi";

interface LaunchProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function CreateLaunch({isOpen, handleOpenModal}: LaunchProps) {
    
    function closeModal() {
        handleOpenModal()
    }

    return (
            <BaseModal title="Escolha o Tipo de Lançamento" opened={isOpen} children={<LaunchBody handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function LaunchBody({handleOpenModal}: Pick<LaunchProps, "handleOpenModal">) {
    const [isOpenManual, setIsOpenManual] = React.useState(false)
    const [isOpenApi, setIsOpenApi] = React.useState(false)

    function handleOpenManual() {
        setIsOpenManual(!isOpenManual)
    }

    function handleOpenApi() {
        setIsOpenApi(!isOpenApi)
    }

   return (
    <Container>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.3rem'}}>
            <Button onClick={handleOpenManual} sx={{color: '#828DD4', borderRadius: '10px'}} variant="outlined">Lançamento Manual</Button>
            <Button onClick={handleOpenApi} sx={{color: '#828DD4', borderRadius: '10px'}} variant="outlined">Lançamento Via API</Button>
        </Box>
        <CreateLaunchManual isOpen={isOpenManual} handleOpenModal={handleOpenManual} />
        <CreateLaunchApi isOpen={isOpenApi} handleOpenModal={handleOpenApi} />
    </Container>
   )
}