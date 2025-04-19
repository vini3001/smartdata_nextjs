'use client'

import {ReactNode, useRef, useState} from "react";
import { Header, SideBar } from "@/presentation/components";
import { BodyContainer, Container, ContainerHome, CustomContainer, FilterContainer, FirstRow, } from "./styles";
import NavigateHeader from "@/presentation/components/NavigateHeader";
import { Divider } from "@mui/material";
import { FooterContainer } from "./styles";
import ModalChatAI from "@/presentation/components/DefaultPage/modalChatAI";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface DefaultPageProps {
  body: ReactNode;
  path: string;
  selectedIcon?: string;
  text: string;
  subTextComponent?: ReactNode;
  sideComponent: ReactNode;
  CustomSelectedIcon: ReactNode
}

export interface viewProps {
  view: 'grid' | 'list'
}

export default function DefaultPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const path = usePathname()

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <div>
        <Header openSideBar={openSideBar} />
      </div> 
        <CustomContainer>
          <SideBar
            open={openSideBar}
          />
          <BodyContainer>
              <NavigateHeader handleOpenSideBar={() => setOpenSideBar(!openSideBar)} path={path} /> 
              <Divider />
              <ContainerHome>
                <FirstRow>
                  {children}
                </FirstRow>
              </ContainerHome> 
            <FooterContainer>
                <span>© copyright 2024 - SmartData é  RISTI</span>
                <button onClick={handleOpenModal} className="image-container">
                   <Image width={200} height={100} src="/assets/Home/Botao AI.svg" alt={""} />
                </button>
            </FooterContainer>
            <ModalChatAI isOpen={isOpen} handleModal={handleOpenModal}/>
          </BodyContainer> 
        </CustomContainer>
    </Container>
  );
}