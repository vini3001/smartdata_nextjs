import { ListItemIcon } from "@mui/material";
import { Container, FirstColumn, IconContainer, SecondColumn } from "./style";
import SideBarIcon, { IconProps } from "@/presentation/assets/SideBar/Icons";

interface NavigateHeaderProps extends IconProps{
   path: string
   handleOpenSideBar: () => void;
}

export default function NavigateHeader(NagivateProps: NavigateHeaderProps) {
   const { path, handleOpenSideBar, selectedIcon } = NagivateProps;

    return (
        <Container>
           <FirstColumn>
              <IconContainer onClick={handleOpenSideBar}>
                <ListItemIcon><SideBarIcon selectedIcon={selectedIcon} /></ListItemIcon>
                <span>{path}</span>
              </IconContainer>
           </FirstColumn>
           <SecondColumn>
              <span>Bem vindo, FELIPE SANTOS</span>
           </SecondColumn>
        </Container>
    )
}