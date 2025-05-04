import { Toolbar } from "@mui/material";
import { Container, ContainerHeader, ContainerIcons, ContainerLogo, CustomHeader } from "./styles";
import TextFieldHeader from "./components/CustomTextField";
import UserDropDownFilter from "./components/UserDropdown";
import Image from "next/image";

interface HeaderProps {
  openSideBar: boolean;
  filter: React.ReactNode
}

export default function Header(props: HeaderProps): React.ReactNode {
  const { openSideBar, filter } = props;

  return (
    <Container opensidebar={openSideBar  ?  'true'  :  'false'}>
      <CustomHeader>
        <Toolbar>
          <ContainerHeader>
            {/* Logo */}
            <ContainerLogo>
              <Image width={100} height={100} src="assets/Header/logo-header.svg" alt={""} />
            </ContainerLogo>

            {/* Search bar */}
            <TextFieldHeader />

            {/* Icons */}
            <ContainerIcons>
              {filter}
              <UserDropDownFilter />
            </ContainerIcons>
          </ContainerHeader>
        </Toolbar>
      </CustomHeader>
    </Container>
  );
}
