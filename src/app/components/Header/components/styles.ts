import { Button, MenuList, Popper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";

interface ButtonProps {
   color?: 'green' | 'purple'
   header?: 'false' | 'true'
}

export const theme = createTheme({
   components: {
     MuiFormControl: {
       styleOverrides: {
         root: {
           alignItems: "center",
         },
       },
     },
     MuiInputBase: {  
       styleOverrides: {
         input: {
           "&::placeholder": {
             color: "white !important",
             fontSize: '15px',
             letterSpacing:  '1px'
           }
         },
       },
     },
   },
 });

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

export const ButtonContainer = styled.div<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 99px;
   min-width: ${(props) => props.header === 'true' ? '20px' : '35px'};
   min-height: ${(props) => props.header === 'true' ? '20px' : '35px'};
   background-color: #828DD4;;

   span {
      color: white;
      height: 100%;
      margin-right: 1px;
      font-family: 'Oxygen';
      font-size: 14px;
      font-weight: 700;
   }
`

export const SvgIcon = styled.img`
   height: 16px;
   width: 16px;
   margin-inline: 0.5rem;
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

export const ItemContainer = styled.div`
  display: flex;
  padding-inline: 16px;
  padding-top: 6px;
  padding-bottom: 8px;  
`

export const ButtonFilter = styled(Button)<ButtonProps>`
  && {
   &.MuiButtonBase-root {
      font-family: 'Oxygen';
      border-radius: 10px;
      width: 50%;
      color: ${(props) => props.color === 'green' ? '#4C8C46' : '#828DD4'};
      text-transform: ${(props) => props.color === 'green' && 'none'};
   }
  }
`

export const ModalContainer = styled(Popper)`
   && {
      .MuiPaper-root {
         padding: 1rem;
      }
   }
`

export const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   color: #000000;

   h4 {
      font-size: 20px;
      line-height: 25.25px;
      margin-bottom: 0.5rem;
   }

   span {
      font-size: 14px;
      line-height: 17.68px;
   }
`

export const ColorPicker = styled(Checkbox)`
   & {
    &.MuiCheckbox-root {
        padding: 2px;
    }
   }
`

export const CustomStyles = styled