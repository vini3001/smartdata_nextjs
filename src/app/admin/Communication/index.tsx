import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container } from "./styles";
import PaginatedItems from "./components/CommunicationPaginate";
import { SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateCommunication from "./components/ModalCreate";


export default function Communication() {
    return (
        <DefaultPage body={<CommunicationBody />} path={"Comunicação"}
            selectedIcon={"Home"} text={"Boa noite, Cláudio"} 
            sideComponent={<AddButton />} />
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