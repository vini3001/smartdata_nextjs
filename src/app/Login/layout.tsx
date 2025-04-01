import { ReactNode } from "react";
import {
  Container,
  ContainerAuth,
  FirstColumn,
  FooterColumn,
  SecondColumn
} from "./styles";
import Image from "next/image";
import { Box } from "@mui/material";

interface LoginLayoutProps {
  children: ReactNode
}

export default function LoginLayout({children}: LoginLayoutProps) {
  // const theme = useTheme();

  return (
    <Container>
        <ContainerAuth>
          <FirstColumn>
            <Image width={200} height={100} src="/assets/logo.svg" alt="money-login" />
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
