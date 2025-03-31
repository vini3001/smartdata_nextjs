import { ListItemButton } from "@mui/material";
import styled from "styled-components";

interface DropdownProps {
   isopen?: 'true' | 'false'
   isnumber?: 'true' | 'false'
}

export const Container = styled.div.withConfig({
   shouldForwardProp: (prop) => prop !== "isnumber",
 })<DropdownProps>`
   display: flex;
   align-items: center;
   height: 2rem;
   width: fit-content;
   position: relative;
   flex-direction: column; 

   &&[hidden] {
    display: none !important;
  }
   
   a {
      font-family: 'Oxygen';
      font-weight: 300;
      font-size: ${(props) => (props.isnumber === "true" ? "13.5px" : "13px")};
      //line-height: 16.42px;
      margin-left: 0.2rem;
    }

    .MuiSvgIcon-root {
      color: #828DD4;
   }
`

export const SubMenu = styled.div.withConfig({
   shouldForwardProp: (prop) => prop !== "isnumber",
 })<DropdownProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  top: 90%;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  overflow: hidden;
  z-index: 20;
  border-bottom-left-radius: 1rem; 
  border-bottom-right-radius: 1rem;

  span {
   font-family: 'Oxygen';
   font-weight: 300;
   font-size: ${(props) => (props.isnumber === "true" ? "13.5px" : "13px")};
   //line-height: 16.42px;
  }
`

export const CustomButtonSubMenu = styled(ListItemButton)`
   &&.MuiButtonBase-root{
      display: flex;
      flex-direction: row;
      background-color: white;
      align-items: center;
      padding: 8px;
   }

   .icon-text {
      display: flex;
      align-items: center;
      gap: 0.5rem
   }

   .MuiListItemIcon-root {
      justify-content: end;
      min-width: 1.5rem;
   }

   .MuiSvgIcon-root {
      font-size: 1rem;
   }
`

export const CustomButtonContainer = styled(ListItemButton).withConfig({
   shouldForwardProp: (prop) => prop !== "isopen",
 })<DropdownProps>`
   &&.MuiButtonBase-root{
      display: flex;
      min-width: ${(props) => (props.isnumber === "true" ? '3.5rem' : '6.2rem')};
      gap: 0.5rem;
      position: relative;
      flex-direction: row;
      ${(props) => (props.isopen === "true" ? "border-top-left-radius: 1rem; border-top-right-radius: 1rem;" : "border-radius: 99px")};
      ${(props) => (props.isopen === "true" ? "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" : "none")};
      background-color: white;
      justify-content: space-between;
      padding: 5px 10px 5px 10px;
      align-items: center;

      transition: border-bottom-right-radius 200ms, border-bottom-left-radius 200ms;
   }

   .icon-text {
      display: flex;
      align-items: center;
      gap: 0.5rem
   }

   .MuiListItemIcon-root {
      justify-content: end;
      min-width: auto
   }

   .MuiSvgIcon-root {
      font-size: 1rem;
   }
`