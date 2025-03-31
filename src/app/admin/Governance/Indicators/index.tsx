import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container, CustomButton } from "./styles";
import PaginatedItems from "./components/IndicatorsPaginate";
import { useState } from "react";
import { SvgIcon } from "@mui/material";
import CreateIndicator from "./components/ModalCreate";


export default function GovernanceIndicators() {
    return (
        <DefaultPage body={<GovernanceIndicatorsBody />} path={"Governança / Indicadores"}
                    selectedIcon={"Home"} text={"Boa noite, Cláudio"} 
                    sideComponent={<AddButton />} />
    )
}

function GovernanceIndicatorsBody() {
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
          <span>NOVO INDICADOR</span>
        </CustomButton>
        <CreateIndicator isOpen={isOpen} handleOpenModal={handleOpenModal} />
      </>
    )
  }