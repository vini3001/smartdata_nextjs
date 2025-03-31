import { ReactNode } from "react";
import {
  Container,
  ContainerAuth,
  FirstColumn,
  FooterColumn,
  SecondColumn
} from "./styles";

interface LoginLayoutProps {
  children: ReactNode
}

export default function LoginLayout({children}: LoginLayoutProps) {
  // const theme = useTheme();

  return (
    <Container>
        <ContainerAuth>
          <FirstColumn>
            <img src="/src/presentation/pages/Login/assets/logo.svg" alt="money-login" />
          </FirstColumn>
           <SecondColumn>
              {children}   
            <FooterColumn>
              <span>© copyright 2024 -  SmartData é  RISTI</span>
            </FooterColumn>       
            </SecondColumn>            
        </ContainerAuth>
    </Container>
  );
}
