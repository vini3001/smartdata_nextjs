import { ListItemButton } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   position: relative;
   width: 100%;
   flex-direction: column;

   a {
      font-family: 'Oxygen';
      font-weight: 300;
    }
`

export const ListSubMenu = styled(ListItemButton)`
   .submenu-container {
      width: 75%;
   }

  &&{
    &.MuiButtonBase-root {
        justify-content: end;
        font-family: 'Oxygen';
        font-weight: 400;
        line-height: 1.5rem;
        font-size: 14px;
        color: #828DD4;
        text-transform: none;
        width: 100%;
    }
  }
`

export const CustomButtonContainer = styled(ListItemButton)`
   &&.MuiButtonBase-root{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 8px;
      align-items: center;
   }
`

export const CustomButton = styled(Button)`
   && {
      width: 100%;


      &.MuiButtonBase-root {
        font-family: 'Oxygen';
        font-weight: 400;
        line-height: 1.5rem;
        font-size: 1rem;
        color: black;
        text-transform: none;
      }

      .MuiButton-startIcon {
         margin-right: 4px;

         .MuiSvgIcon-root {
            color: #828DD4;
         }
      }

      .MuiButton-endIcon {
         .MuiSvgIcon-root {
            font-size: medium;
         }
      }
  }
`