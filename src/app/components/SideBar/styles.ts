import SideBarIcon from "@/assets/SideBar/Icons";
import styled from "styled-components";

export const Container = styled.div``;

export interface ContainerSideBarProps {
  opendrawer: 'true' | 'false';
}

export const ContainerSideBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "openDrawer",
})<ContainerSideBarProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;

  width: ${(props) => (props.opendrawer === 'true' ? "18rem" : "4rem")};

  transition: all 100ms ease-in-out;

  .icon-text {
      display: flex;
      min-height: 1.5rem;
      width: 100%;
      align-items: center;
      font-size: 14px;
   }

  && {
    .MuiButtonBase-root {
      min-height: 1.5rem;
      gap: 0.5rem;
      padding-inline: 8px;
    }

    .MuiListItemIcon-root {
      min-width: 50px;
      justify-content: center;
    }

    .MuiDivider-root {
      width: 100%;
    }

    .MuiTypography-root {
      font-family: 'Oxygen';
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

export const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => prop !== "openDrawer",
})<ContainerSideBarProps>`
  display: flex;
  margin-bottom: 8px;
  flex-direction: column;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: end;
  bottom: 0;
  gap: 1rem;

  span {
    width: 100%;
    text-align: center;
    font-family: 'Oxygen';
    font-weight: 400;
    font-size: ${(props) => props.opendrawer === 'true' ? '14px' : '13px'}; 
    line-height: 17.68px;
  }
`

export const ContainerImg = styled.div`
  display: flex;
  padding-bottom: 5px;
  justify-content: center;
  margin-top: 20px;
  .resize-logo {
    display: none;
    visibility: hidden;
  }
`;