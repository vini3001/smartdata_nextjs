'use client'

import { useEffect, useLayoutEffect, useState} from "react";
import { Header, SideBar } from "@/app/components";
import { BodyContainer, Container, ContainerHome, CustomContainer, FilterContainer, FirstRow, } from "./styles";
import NavigateHeader from "@/app/components/NavigateHeader";
import { Divider } from "@mui/material";
import { FooterContainer } from "./styles";
import ModalChatAI from "@/app/components/DefaultPage/modalChatAI";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menus, { MenuProps } from "@/app/(root)/routes";

export interface viewProps {
  view: 'grid' | 'list'
}

export default function DefaultPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedRoute, setSelectedRoute] = useState<MenuProps>()
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const path = usePathname()

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    console.log('infoRoute')
    const infoRoute = menus.find((item) => {return item.route === path})
    setSelectedRoute(infoRoute)
  }, [path])

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
              <NavigateHeader handleOpenSideBar={() => setOpenSideBar(!openSideBar)} path={selectedRoute?.text ?? ''} 
                SelectedIcon={selectedRoute?.icon ?? ''} /> 
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