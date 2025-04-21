import { Container, FirstColumn, IconContainer, SecondColumn } from "./style";
import SideBarIcon, { IconProps } from "@/assets/SideBar/Icons";

interface NavigateHeaderProps extends IconProps{
   path: string
   CustomSelectedIcon?: React.ReactNode
   handleOpenSideBar: () => void;
}

export default function NavigateHeader(NagivateProps: NavigateHeaderProps) {
   const { path, handleOpenSideBar, CustomSelectedIcon, selectedIcon } = NagivateProps;

    return (
        <Container>
           <FirstColumn>
              <IconContainer onClick={handleOpenSideBar}>
                 {selectedIcon !== undefined ? <SideBarIcon selectedIcon={selectedIcon} /> :
                   CustomSelectedIcon
                  }
                <span>{path}</span>
              </IconContainer>
           </FirstColumn>
           <SecondColumn>
              <span>Bem vindo, FELIPE SANTOS</span>
           </SecondColumn>
        </Container>
    )
}