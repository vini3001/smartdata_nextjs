'use client'

import { RoutesEnum } from "@/domain/models/Enums";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme}  from "@mui/material";
import { ContainerImg, ContainerSideBar, FooterContainer } from "./styles";
import MenuDropdown from "./components/MenuDropdown";
import { useRouter } from "next/navigation";
import Image from "next/image";
import menus from "@/app/(root)/routes";

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

  return (
    <ContainerSideBar opendrawer={open ? 'true' : 'false'}>
      
        <ContainerImg>
          <Image width={200} height={100}
        src={theme.images.logo}
        className={open ? "" : "resize-logo"} alt={""}          />
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
