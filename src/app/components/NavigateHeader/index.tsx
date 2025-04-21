import { Container, FirstColumn, IconContainer, SecondColumn } from "./style";
import SideBarIcon, { IconProps } from "@/assets/SideBar/Icons";

interface NavigateHeaderProps {
   path: string
   SelectedIcon?: React.ReactNode
   handleOpenSideBar: () => void;
}

export default function NavigateHeader(NagivateProps: NavigateHeaderProps) {
   const { path, handleOpenSideBar, SelectedIcon } = NagivateProps;

    return (
        <Container>
           <FirstColumn>
              <IconContainer onClick={handleOpenSideBar}>
                 {SelectedIcon}
                <span>{path}</span>
              </IconContainer>
           </FirstColumn>
           <SecondColumn>
              <span>Bem vindo, FELIPE SANTOS</span>
           </SecondColumn>
        </Container>
    )
}