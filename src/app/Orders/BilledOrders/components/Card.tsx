import React from "react";
import { CardButton, CardContainer, GridContainer, InfoHeader } from "./styles";
import ScheduleModal from "@/presentation/pages/Schedule/components/ScheduleModal";

interface CardProps {
    currentItems: number[]
}

export default function Card({currentItems}: CardProps) {
    const [open, setOpen] = React.useState(false);
      const handleModal = () => {
        setOpen(!open);
      };
      
    return (
        <GridContainer>
            {currentItems.map((item) => {
                return (
                    <CardContainer key={item}>
                       <InfoHeader>
                            <div className="title-container">
                                <span>Financeiro</span>
                                <a>Nome do BI</a>
                            </div>

                            <div className="icon-container">
                                <CardButton>
                                    <img src="src/presentation/assets/Home/botao_BI.svg" />
                                </CardButton>
                                <CardButton onClick={handleModal}>
                                    <img src="src/presentation/assets/Home/botao-criar-agendamento.svg" />
                                </CardButton>
                                <CardButton>
                                    <img src="src/presentation/assets/Home/botao-cancelar-agendamento.svg" />
                                </CardButton>
                                <CardButton>
                                    <img src="src/presentation/assets/Home/botao_lixeira.svg" />
                                </CardButton>             
                            </div>
                        </InfoHeader>
                        <img src="/src/presentation/assets/Home/Group 924.png" className="image-container" />    
                    </CardContainer>
                )
            })}
           <ScheduleModal isOpen={open} handleModal={handleModal} /> 
        </GridContainer>
    )
}