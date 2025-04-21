'use client'

import { ButtonBase, DefaultPage } from "@/app/components";
import { Container } from "../styles";
import PaginatedItems from "./LaunchPaginate";
import { SvgIcon } from "@mui/material";
import { useState } from "react";
import ModalLaunch from "./ModalLaunch"
import { YupService } from "@/domain/services";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import { Article } from "@mui/icons-material";


export default function ClientLaunch() {
    return (
        <DefaultPage body={<LaunchBody />} path={"Lançamento"}
            selectedIcon={undefined} text={"Boa noite, Cláudio"} 
            sideComponent={<AddButton />} CustomSelectedIcon={<Article />} />
    )
}

function LaunchBody() {
  const methods = YupService.useFormYup(schemaTeams);
  
  const {
  handleSubmit,
  register,
  control,
  formState: { errors },
  } = methods;
  
  return (
    <Container>
        <PaginatedItems />
    </Container>
  )
}

function AddButton() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ButtonBase startIcon={<SvgIcon sx={{fontSize: '30px !important', marginRight: '2px'}}>
                                 <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" fill="#FFFFFF"></path>
                             </SvgIcon>} 
        sx={{'.MuiButton-startIcon': {marginRight: '4px'}, fontSize: '15px', alignItems: 'center', backgroundColor: '#71B475', borderRadius: '99px', paddingInline: '20px'}}
        onClick={handleOpenModal}>
        NOVO LANÇAMENTO
      </ButtonBase>
      <ModalLaunch isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}