import { ButtonContainer, ListButton, ListContainer, ListContent } from "./styles";

interface ListProps {
    currentItems: number[]
}

export default function List({currentItems}: ListProps) {
    return (
        <ListContainer>
            {currentItems.map((item) => {
                return (
                    <ListContent key={item}>
                        <div className="title-container">
                            <a>Nome do Arquivo</a>
                        </div>
                        <div className="document-container">
                            <a>BI</a>
                        </div>
                        <div className="hour-container">
                            <a>ago 12,  - 03:44 pm</a>
                        </div>
                        <div className="perfil-container">
                            <ButtonContainer>
                                <span>C</span>
                            </ButtonContainer>
                        </div>
                        <div className="icon-container">
                            <ListButton>
                                <img src="src/presentation/assets/Dump/option-icon.svg" />
                            </ListButton>
                        </div>
                    </ListContent>
                )
            })}
            
        </ListContainer>
    )
}