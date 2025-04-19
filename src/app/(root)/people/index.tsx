import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container } from "./styles";
import PaginatedItems from "./components/PeoplePaginate";
import { SvgIcon } from "@mui/material";
import { useState } from "react";
import CreatePeople from "./components/ModalCreate";
import { Contacts } from "@mui/icons-material";


export default function People() {
    return (
        <DefaultPage body={<PeopleBody />} path={"Pessoas"}
        selectedIcon={undefined} text={"Boa noite, Cláudio"}
        sideComponent={<AddButton />} CustomSelectedIcon={<Contacts />} 
        filters={[{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
                  {id: 2, name: 'Cargo', isDropdown: false, submenu: [] },
                  {id: 3, name: 'Departamento', isDropdown: false, submenu: [] },
                  {id: 4, name: 'Grupo', isDropdown: false, submenu: [] }]} />
    )
}

function PeopleBody() {
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
        NOVA PESSOA
      </ButtonBase>
      <CreatePeople isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}