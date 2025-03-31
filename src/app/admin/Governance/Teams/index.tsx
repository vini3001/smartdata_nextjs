import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container, CustomButton } from "./styles";
import PaginatedItems from "./components/TeamsPaginate";
import { useState } from "react";
import { SvgIcon } from "@mui/material";
import CreateTeams from "./components/ModalCreate";


export default function GovernanceTeams() {
    return (
        <DefaultPage body={<GovernanceTeamsBody />} path={"Governança / Equipes"}
                    selectedIcon={"Home"} text={"Boa noite, Cláudio"} 
                    sideComponent={<AddButton />} />
    )
}

function GovernanceTeamsBody() {
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
        <CustomButton startIcon={<SvgIcon sx={{fontSize: '30px !important'}}>
               <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" fill="#FFFFFF"></path>
        </SvgIcon>} 
          sx={{'.MuiButton-startIcon': {marginRight: '4px'}, backgroundColor: '#71B475', alignItems: 'center', fontSize: '15px', borderRadius: '99px', paddingInline: '20px'}}
          onClick={handleOpenModal}>
          <span>NOVA EQUIPE</span>
        </CustomButton>
        <CreateTeams isOpen={isOpen} handleOpenModal={handleOpenModal} />
      </>
    )
  }