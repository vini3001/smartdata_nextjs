import React from "react";
import { CardButton, CardContainer, GridContainer, InfoHeader } from "./styles";
import ScheduleModal from "../../Schedule/components/ScheduleModal";
import PowerBiModal from "../../PowerBI/components/PowerBIModal";

interface CardProps {
    currentItems: number[]
}

export default function Card({currentItems}: CardProps) {
    const [openSchedule, setOpenSchedule] = React.useState(false);
    const [openPowerBi, setOpenPowerBi] = React.useState(false);

      const handleModalSchedule = () => {
        setOpenSchedule(!openSchedule);
      };

      const handleModalPowerBi = () => {
        setOpenPowerBi(!openPowerBi);
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
                                <CardButton onClick={handleModalPowerBi}>
                                    <img src="src/presentation/assets/Home/botao_BI.svg" />
                                </CardButton>
                                <CardButton onClick={handleModalSchedule}>
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
           <ScheduleModal isOpen={openSchedule} handleModal={handleModalSchedule} /> 
           <PowerBiModal isOpen={openPowerBi} handleModal={handleModalPowerBi} />
        </GridContainer>
    )
}