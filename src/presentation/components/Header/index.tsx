import { Toolbar } from "@mui/material";
import { Container, ContainerHeader, ContainerIcons, ContainerLogo, CustomHeader } from "./styles";
import TextFieldHeader from "./components/CustomTextField";
import MenuDropDownFilter from "./components/DropdownFilter";
import UserDropDownFilter from "./components/UserDropdown";

interface HeaderProps {
  openSideBar: boolean;
}

export default function Header(props: HeaderProps): React.ReactNode {
  const { openSideBar } = props;

  return (
    <Container opensidebar={openSideBar  ?  'true'  :  'false'}>
      <CustomHeader>
        <Toolbar>
          <ContainerHeader>
            {/* Logo */}
            <ContainerLogo>
              <img src="/src/presentation/assets/Header/logo-header.svg" />
            </ContainerLogo>

            {/* Search bar */}
            <TextFieldHeader />

            {/* Icons */}
            <ContainerIcons>
              <MenuDropDownFilter />
              <UserDropDownFilter />
            </ContainerIcons>
          </ContainerHeader>
        </Toolbar>
      </CustomHeader>
    </Container>
  );
}
