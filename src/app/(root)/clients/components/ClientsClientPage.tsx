'use client'

import { ButtonBase } from "@/app/components";
import PaginatedItems from "./ClientsPaginate";
import { Box, SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateGroup from "../../group-people/components/ModalCreate";
import { Container } from "../styles";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientsPage() {
  
    return (
      <Box>
        <ToolsBand text={"Boa Noite, Cláudio"} sideComponent={<AddButton />} />
        <ClientsBody />
      </Box>
      // <DefaultPage body={<ClientsBody />} path={"Clientes"}
      // selectedIcon={undefined} text={"Boa noite, Cláudio"} 
      // sideComponent={<AddButton />} CustomSelectedIcon={<People />} 
      // filters={[{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
      //           {id: 2, name: 'Nome Abreviado', isDropdown: false, submenu: [] },
      //           {id: 3, name: 'Nome Contato', isDropdown: false, submenu: [] },
      //           {id: 4, name: 'Usuário Administrador', isDropdown: false, submenu: [] }]}/>
    )
}

function ClientsBody() {
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
        NOVO CLIENTE
      </ButtonBase>
      <CreateGroup isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}