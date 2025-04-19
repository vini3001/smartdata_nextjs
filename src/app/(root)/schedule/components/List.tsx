import { useState } from "react";
import { ListButton, ListContainer, ListContent, ListStrip, ListWrapper } from "./styles";
import { DropdownDays } from "./DropdownDays";
import Image from "next/image";

interface ListProps {
    currentItems: number[]
}

export default function List({currentItems}: ListProps) {
    const [openItemId, setOpenItemId] = useState(null);

    const handleOpenDropdown = (itemId: any) => {
        setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
    };

    return (
        <ListContainer>
            <HeaderStrip />
            {currentItems.map((item) => {
                const isOpen = openItemId === item;

                return (
                    <ListWrapper key={item}>
                        <ListContent submenu="false">
                            <div className="title-container">
                                <a>Nome do BI</a>
                            </div>
                            <div className="time-container" onClick={() => {handleOpenDropdown(item)}}>
                                <DropdownDays text={"sexta-feira  entre  às  8h00  e  9h00"} />
                            </div>
                            <div className="icon-container">
                                <ListButton>
                                    <Image width={200} height={100} src="/assets/Schedule/edit-icon.svg" alt={""} />
                                </ListButton>
                                <ListButton>
                                    <Image width={200} height={100} src="/assets/Schedule/botao-lixeira-vermelho.svg" alt={""} />
                                </ListButton>
                            </div>
                        </ListContent>
                        {/* Sub-menu de cada dia de agendamento */}
                        <ListContent isOpen={isOpen ? 'true' : 'false'} submenu="true">
                            <div className="title-container">
                                <a>TESTE</a>
                            </div>
                            <div className="time-container">
                                <a>sexta-feira  entre  às  8h00  e  9h00</a>
                            </div>
                            <div className="icon-container">
                                <ListButton>
                                </ListButton>
                                <ListButton>
                                    <Image width={200} height={100} src="/assets/Schedule/botao-lixeira-vermelho.svg" alt={""} />
                                </ListButton>
                            </div>
                        </ListContent>
                    </ListWrapper>
                )
            })}
            
        </ListContainer>
    )
}

export function HeaderStrip() {
    return (
        <ListStrip>
            <div className="title-container" />
            <div className="time-container" />
            <div className="icon-container" />
        </ListStrip>
    )
}