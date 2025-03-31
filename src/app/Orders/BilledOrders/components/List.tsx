import React from "react";
import { ListButton, ListContainer, ListContent, ListStrip } from "./styles";
import ScheduleModal from "@/presentation/pages/Schedule/components/ScheduleModal";

interface ListProps {
    currentItems: number[]
}

export default function List({currentItems}: ListProps) {
    const [open, setOpen] = React.useState(false);
    const handleModal = () => {
    setOpen(!open);
    };
          
    return (
        <ListContainer>
            <HeaderStrip />
            {currentItems.map((item) => {
                return (
                    <ListContent key={item}>
                        <div className="title-container">
                            <span>Financeiro</span>
                            <a>Nome do BI</a>
                        </div>
                        <div className="icon-container">
                            <ListButton>
                                <img src="src/presentation/assets/Home/botao_BI.svg" />
                            </ListButton>
                            <ListButton onClick={handleModal}>
                                <img src="src/presentation/assets/Home/botao-criar-agendamento.svg" />
                            </ListButton>
                            <ListButton>
                                <img src="src/presentation/assets/Home/botao-cancelar-agendamento.svg" />
                            </ListButton>
                            <ListButton>
                                <img src="src/presentation/assets/Home/botao_lixeira.svg" />
                            </ListButton>
                        </div>
                    </ListContent>
                )
            })}
            <ScheduleModal isOpen={open} handleModal={handleModal} /> 
        </ListContainer>
    )
}

export function HeaderStrip() {
    return (
        <ListStrip>
            <div className="title-container" />
            <div className="icon-container" />
        </ListStrip>
    )
}