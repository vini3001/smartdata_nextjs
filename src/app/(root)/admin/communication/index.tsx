import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container } from "./styles";
import PaginatedItems from "./components/CommunicationPaginate";
import { SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateCommunication from "./components/ModalCreate";
import { ConnectWithoutContact } from "@mui/icons-material";


export default function Communication() {
    return (
        <DefaultPage body={<CommunicationBody />} path={"Comunicação"}
            selectedIcon={undefined} text={"Boa noite, Cláudio"} 
            sideComponent={<AddButton />} CustomSelectedIcon={<ConnectWithoutContact />}
            filters={[{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
            {id: 2, name: 'Descrição', isDropdown: false, submenu: [] },
            {id: 3, name: 'Meio de Comunicação', isDropdown: false, submenu: [] },
            {id: 4, name: 'Tipo de Intervalo', isDropdown: false, submenu: [] },
            {id: 5, name: 'Intervalo de Repetição', isDropdown: false, submenu: [] },
            {id: 6, name: 'Data de Início', isDropdown: false, submenu: [] },
            {id: 7, name: 'Data de Fim', isDropdown: false, submenu: [] }]} />
    )
}

function CommunicationBody() {
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
        NOVA COMUNICAÇÃO
      </ButtonBase>
      <CreateCommunication isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}