import React from "react";
import { CardButton, CardContainer, GridContainer, InfoHeader } from "./styles";
import ScheduleModal from "@/app/Schedule/components/ScheduleModal";
import Image from "next/image";

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
                                    <Image width={200} height={100} src="/assets/Home/botao_BI.svg" alt={""} />
                                </CardButton>
                                <CardButton onClick={handleModal}>
                                    <Image width={200} height={100} src="/assets/Home/botao-criar-agendamento.svg" alt={""} />
                                </CardButton>
                                <CardButton>
                                    <Image width={200} height={100} src="/assets/Home/botao-cancelar-agendamento.svg" alt={""} />
                                </CardButton>
                                <CardButton>
                                    <Image width={200} height={100} src="/assets/Home/botao_lixeira.svg" alt={""} />
                                </CardButton>             
                            </div>
                        </InfoHeader>
                        <Image width={200} height={100} src="/assets/Home/Group924.png" className="image-container" alt={""} />    
                    </CardContainer>
                )
            })}
           <ScheduleModal isOpen={open} handleModal={handleModal} /> 
        </GridContainer>
    )
}