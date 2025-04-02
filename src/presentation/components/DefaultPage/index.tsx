'use client'

import {ReactNode, useRef, useState} from "react";
import { Header, SideBar } from "..";
import { BodyContainer, Container, ContainerHome, CustomContainer, FilterContainer, FirstRow, } from "./styles";
import NavigateHeader from "../NavigateHeader";
import { Divider } from "@mui/material";
import "./styles.css"
import { FooterContainer } from "./styles";
import ModalChatAI from "./modalChatAI";
import Image from "next/image";

interface DefaultPageProps {
  body: ReactNode;
  path: string;
  selectedIcon: string;
  text: string;
  subTextComponent?: ReactNode;
  sideComponent: ReactNode
}

export interface viewProps {
  view: 'grid' | 'list'
}

export default function DefaultPage({ body, path, selectedIcon, text, subTextComponent, sideComponent }: DefaultPageProps): React.ReactNode {
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const headerRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
    
  const fadeHeader = () => {
    if (headerRef.current && documentRef.current) {
    
      const headerClassList = headerRef.current.classList;

      if (documentRef.current.scrollTop >= 100) {
        if (!headerClassList.contains('scrollHide')) {
          headerClassList.add('scrollHide')
        }
      } else {
        if (headerClassList.contains('scrollHide')) {
          headerClassList.remove('scrollHide')
        }
      }
    }
  }

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  // useLayoutEffect(() => {
  //     window.addEventListener('scroll',fadeHeader, {passive: true, capture: true});
  // }, [])

  return (
    <Container>
      <div id="header-layout" ref={headerRef}>
        <Header openSideBar={openSideBar} />
      </div> 
        <CustomContainer>
          <SideBar
            open={openSideBar}
          />
          <BodyContainer ref={documentRef}>
              <NavigateHeader handleOpenSideBar={() => setOpenSideBar(!openSideBar)} selectedIcon={selectedIcon} path={path} /> 
              <Divider />
              <ContainerHome>
                <FirstRow>
                  <FilterContainer>
                    <div  className="header-container">
                      <h4>{text}</h4>
                     {subTextComponent}
                    </div>
                    {sideComponent}
                  </FilterContainer>
                  {body}
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