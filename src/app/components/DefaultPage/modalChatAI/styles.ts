import { Button, List, ListItem } from "@mui/material";
import styled from "styled-components";
import ButtonBase from "../../Button";


export interface ContainerSideBarProps {
  opendrawer: 'true' | 'false';
}

export const ContainerSideBar = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== "openDrawer",
})<ContainerSideBarProps>`
  display: flex;
  padding: 20px;
  position: relative;
  height: 100%;
  background-color: white;
  flex-direction: column;

  width: ${(props) => (props.opendrawer === 'true' ? "15rem" : "4rem")};

  transition: all 300ms ease-in-out;

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
      min-width: 0;
      justify-content: center;
    }

    .MuiDivider-root {
      width: 100%;
    }

    .MuiTypography-root {
      color: #000000;
      font-family: 'Oxygen';
      font-size: 10px;
      font-weight: 300;
    }
  }
`;

export const ContainerSideBarBody = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== "openDrawer",
})<ContainerSideBarProps>`
    height: 100%;
    width: ${(props) => (props.opendrawer === 'true' ? "auto" : "0")};
    overflow-y: hidden;

    transition: all 700ms ease-in-out;
`

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   width: 95vw;
   height: 90vh;

  .box1 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 8rem;
  }

  .box2 {
    display: flex;
    max-height: calc(100% - 10rem);
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;

    h4 {
      color: #000000;
      font-size: 15px;
      line-height: 18.94px;
    }

    span {
      font-size: 16px;
    }
  }
`

export const CustomChatButton = styled(Button)`
  && {
    &.MuiButtonBase-root {
      font-size: 15px;
      color: #000000;
      text-transform: none;
      background-color: #F7F6F6;
      border-radius: 20px;
      padding: 8px 21px 8px 21px;
    }
  }
`

export const CustomList = styled(List)`

   && {
    &.MuiList-root {
      overflow-y: auto;
      overflow-x: hidden;
      color: #000000;
    }
   }
`

export const ChatContainer = styled(List)`
   height: fit-content;
   overflow-y: auto;
   overflow-x: hidden;

   && {
    &.MuiList-root {
      color: #000000;
      margin-bottom: 4.8rem;
    }
   }
`

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 1.5rem;
  background-color: #FAFAFA;
`

export const ModalBody = styled('div')`
   display: flex;
   height: 100%;
   width: 100%;
   flex-direction: column;
   position: relative;

   .title-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        font-size: 16px;
        line-height: 20.02px;
        color: #000000
      }
   }

   .close-modal {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
   }
`

export const ChatBox = styled(ListItem)`
   && {
    .MuiListItemIcon-root {
      margin-top: 4px;
      align-items: start;
    }

    &.MuiListItem-root {
      align-items: start;
    }

    .MuiTypography-root {
      color: #000000;
      font-size: 20px;
    }
   }
`

export const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  bottom: 0;
  background-color: #FAFAFA;

  span {
    position: relative;
    left: 20;
    font-size: 15px;
    max-width: 90%;
  }
  
  && {
    &.MuiFormControl-root {
      justify-content: center;
    }
  }
`

export const ButtonMic = styled(ButtonBase)`
  && {
    &.MuiButtonBase-root {
      min-width: 48px;
      padding: 10px;
      margin-right: 8px;
      border-radius: 99px;
    }
  }
`