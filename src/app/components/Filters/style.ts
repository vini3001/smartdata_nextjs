import styled from "@emotion/styled";
import { Button, MenuList } from "@mui/material";

interface ButtonProps {
    customcolor?: 'green' | 'purple'
    header?: 'false' | 'true'
 }

export const CustomButton = styled(Button)`
   && {
      height: 100%;
      min-width: auto;
      font-family: 'Oxygen';
      text-transform: none;
      font-weight: 400;
      font-size: small;
      line-height: 17.68px;
      border-radius: 3.5rem;
      background-color: #474A62;

      &.MuiButton-text {
         color: white;
      }

      .MuiButton-startIcon {
         margin-right: 4px;

         .MuiSvgIcon-root {
            color: #828DD4;
         }
      }

      .MuiButton-endIcon {
         .MuiSvgIcon-root {
            color: white;
            font-size: medium;
         }
      }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  padding-inline: 16px;
  padding-top: 6px;
  padding-bottom: 8px;  
`

export const CustomMenuList = styled(MenuList)`
   .filter-section {
      margin-top: 6px;
      margin-bottom: 6px;
      justify-content: center;
      gap: 0.4rem
   }

   .perfil-container {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;

      a {
         font-weight: 700;
         font-size: 13px;
      }

      span {
         font-weight: 400;
         font-size: 11px;
      }
   }

   .list-custom {
      font-size: 13px;
      gap: 0.5rem;
   }

   .button-container {
     display: flex;
     flex-direction: row;
     gap: 0.2rem;
   }

   && {
     .MuiMenuItem-root {
        min-height: 3rem;
        font-family: 'Oxygen';
        color: #000000
     }

     .MuiDivider-root {
      margin: 0
     }
  }
`

export const ButtonFilter = styled(Button)<ButtonProps>`
  && {
   &.MuiButtonBase-root {
      font-family: 'Oxygen';
      border-radius: 10px;
      width: 50%;
      color: ${(props) => props.customcolor === 'green' ? '#4C8C46' : '#828DD4'};
      text-transform: ${(props) => props.customcolor === 'green' && 'none'};
   }
  }
`