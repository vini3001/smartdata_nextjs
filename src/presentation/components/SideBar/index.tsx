'use client'

import { RoutesEnum } from "@/domain/models/Enums";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "styled-components";
import { ContainerImg, ContainerSideBar, FooterContainer, SideBarCustom } from "./styles";
import MenuDropdown from "./components/MenuDropdown";
import { useRouter } from "next/navigation";

interface SideBarProps {
  open: boolean;
}

export default function SideBar(props: SideBarProps): React.ReactNode {
  
  const theme = useTheme();
  const router = useRouter();

  function handleNavigateHelp() {
    router.push(RoutesEnum.HELP);
  }

  const { open } = props;

  const menus = [
    { text: "Home", icon: <SideBarCustom selectedIcon="Home"/>, route: RoutesEnum.HOME },
    { text: "Comunicação", icon: <SideBarCustom selectedIcon="Home"/>, route: RoutesEnum.COMMUNICATION},
    { text: "Vendas", icon: <SideBarCustom selectedIcon="Sales"/>, route: '', dropdown: true,
    submenu: [{id: 1, text: "Pedidos abertos", route: RoutesEnum.OPENORDERS}, {id: 2, text:"Pedidos faturados", route: RoutesEnum.BILLEDORDERS}]
    },
    { text: "Financeiro", icon: <SideBarCustom selectedIcon="Finance"/>, route: '', dropdown: true },
    { text: "Marketing", icon: <SideBarCustom selectedIcon="Marketing"/>, route: '', dropdown: true },
    { text: "Dashboard", icon: <SideBarCustom selectedIcon="Dashboard"/>, route: '' },
    { text: "PDF", icon: <SideBarCustom selectedIcon="PDF"/>, route: '' },
    { text: "Excel", icon: <SideBarCustom selectedIcon="Excel"/>, route: '' },
    { text: "Governança", icon: <SideBarCustom selectedIcon="Sales"/>, route: '', dropdown: true,
      submenu: [{id: 1, text: "Indicadores", route: RoutesEnum.GOV_INDICATORS},
                {id: 2, text: "Dimensões", route: RoutesEnum.GOV_DIMENSIONS},
                {id: 3, text: "Metas", route: RoutesEnum.GOV_GOALS},
                {id: 4, text: "Equipes", route: RoutesEnum.GOV_TEAMS},
                {id: 5, text: "Período", route: RoutesEnum.GOV_PERIODS}]
      },
  ];

  return (
    <ContainerSideBar opendrawer={open ? 'true' : 'false'}>
      
        <ContainerImg>
          <img
          src={theme.images.logo}
          className={open ? "" : "resize-logo"}
          />
        </ContainerImg>
      
        <List sx={{flexGrow: '1', overflowY: 'auto', padding: 0}}>
          {menus.map((menu) => (
            <div key={menu.text}>
              {!menu.dropdown ? (
              <ListItem
              disablePadding
              onClick={() => router.push(menu.route)}
              >
                <ListItemButton title={menu.text}>
                  <div className="icon-text">
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    {open && <ListItemText primary={menu.text} />}
                  </div>
                </ListItemButton>
              </ListItem>
              ) : (
                <ListItem
              disablePadding
              >
                <MenuDropdown showText={open} text={menu.text} submenu={menu.submenu !== undefined ? menu.submenu : []} icon={menu.icon} />
              </ListItem>
              )}
            {menu.text === 'Marketing' && <Divider />}
            </div>
          ))}
        </List>
        <FooterContainer onClick={handleNavigateHelp} style={{cursor: 'pointer'}} opendrawer={open ? 'true' : 'false'}>
            <Divider />
            <span>© Smart Assistente</span>
        </FooterContainer>
    </ContainerSideBar>
  );
}
