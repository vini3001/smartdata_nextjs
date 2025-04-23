import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import styled from "@emotion/styled";


export const ProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   max-width: 95%;

   .profile-container {
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 0.5rem;
   }

   .personal-data-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.8rem;

        .box1 {
            display: flex;
            flex-direction: column;
            gap: 0.8rem
        }
   }

   .authentication-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
   }

   .pickers-container {
       display: flex;
       flex-direction: column;
       gap: 1rem;
   }

   .language-container {
       display: flex;
       max-width: 50%;
       flex-direction: column;
       gap: 1.5rem;
   }

   .preferences-container {
       display: flex;
       flex-direction: column;
       gap: 2rem;
   }
`

export const ColorPicker = styled(Checkbox)`
   & {
    &.MuiCheckbox-root {
        padding: 2px;
    }
   }
`

export const CheckboxAccount = styled(Checkbox)`
    
`

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        color: #000000;
        gap: 0.1rem;

        a {
            font-weight: 400;
            font-size: 14px;
        }

        span {
            font-weight: 300;
            font-size: 11px;
        }
    }
`

export const CheckboxAccountContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
`

export const ButtonProfile = styled(Button)`   
   .image-container {
        position: absolute;
        cursor: pointer;
        width: 100%;
        border: 1px solid #828DD4;
        max-width: 93px;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 50%;
   }

   .input-file {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1
   }

   && {
    &.MuiButtonBase-root {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 99px;
        min-width: auto;
        width: 100%;
        height: 100%;
        background-color: #828DD4;
        color: white;

        span {
            //Fonte
            font-family: 'Oxygen';
            font-size: 48px;
            font-weight: 700;
            margin-right: 0.2rem;
        }
    }
   }
`

export const ButtonPhoto = styled(Button)`
        && {
            &.MuiButtonBase-root {
                display: flex;
                position: absolute;
                align-items: center;
                justify-content: center;
                border: 1px solid #828DD4;
                border-radius: 99px;
                min-width: auto;
                width: 33px;
                height: 33px;
                background-color: #FAFAFA;
                color: white;
                bottom: 0;
                right: 0;
            }
        }
`

export const SvgIcon = styled.img`
   height: 16px;
   width: 16px;
   margin-inline: 0.5rem;
`