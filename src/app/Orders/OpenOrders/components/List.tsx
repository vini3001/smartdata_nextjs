import React from "react";
import { ListButton, ListContainer, ListContent, ListStrip } from "./styles";
import ScheduleModal from "@/app/Schedule/components/ScheduleModal";
import Image from "next/image";

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
                                <Image width={200} height={100} src="/assets/Home/botao_BI.svg" alt={""} />
                            </ListButton>
                            <ListButton onClick={handleModal}>
                                <Image width={200} height={100} src="/assets/Home/botao-criar-agendamento.svg" alt={""} />
                            </ListButton>
                            <ListButton>
                                <Image width={200} height={100} src="/assets/Home/botao-cancelar-agendamento.svg" alt={""} />
                            </ListButton>
                            <ListButton>
                                <Image width={200} height={100} src="/assets/Home/botao_lixeira.svg" alt={""} />
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