'use client'

import { ButtonBase } from "@/app/components";
import { Container } from "../styles";
import PaginatedItems from "./GroupPeoplePaginate";
import { Box, SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateGroup from "./ModalCreate";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientGroupPeople() {
  return (
    <Box>
      <ToolsBand text={"Boa noite, Cláudio"} sideComponent={<AddButton />} />
      <GroupPeopleBody />
    </Box>
    )
}

function GroupPeopleBody() {
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
        NOVO GRUPO
      </ButtonBase>
      <CreateGroup isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}