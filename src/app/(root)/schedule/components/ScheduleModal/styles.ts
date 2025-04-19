import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal'
import { Button as ButtonBase } from '@mui/base/Button';
import { Backdrop, Button } from '@mui/material'

interface ButtonProps {
  selected?: 'true' | 'false'
  background?: string
}

export const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

export const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const Modal = styled(BaseModal)`
  position: absolute;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const styleMain = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  maxWidth: '100vw',
  overflowX: ' hidden',
  maxHeight: '100vh'
};

export const styleChild = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: 'auto',
  maxHeight: '100%'
};

export const ModalContent = styled('div')(
  ({ theme }) => css`
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    //gap: 1rem
    background-color: #FAFAFA;
    border-radius: 8px;
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
  `,
);

export const ModalButton = styled(Button)(
  ({ theme }) => `
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);

export const HeaderContent = styled('div')`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   .title-container {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      span {
        font-size: 16px;
        line-height: 20.02px;
        color: #000000
      }

      h4 {
        font-size: 20px;
        line-height: 20.02px;
        color: #000000
      }
   }
`

export const BodyContentChildModal = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  .box2 {
    display: flex;
    flex-direction: row;
    gap: 0.3rem
  }

  .box3 {
    display: flex;
    flex-direction: column;
  }

  .option1 {
    display: flex;
    flex-direction: column;
    gap: 0.8rem
  }

  .option2 {
    display: flex;
    margin-bottom: 0.5rem;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    a {
      font-weight: 400;
      font-size: 15px;
    }
  }

  .button1 {
    display: flex;
    width: 50%;
    flex-direction: row;
    gap: 0.5rem;
  }

  .button2 {
    display: flex;
    width: 25%;
    flex-direction: row;
  }

  .buttons-container {
    display: flex;
    width: 100%;
    margin-top: 1.5rem;
    justify-content: space-between;
    flex-direction: row;
    align-self: flex-end;
    gap: 0.2rem;
  }

  .subtext-container {
    display: flex;
    margin-top: 0.2rem;
    align-items: center;
    justify-content: space-between;
  }

  .week-container {
    display: flex;
    flex-direction: row;
    max-width: 70%;
    gap: 0.8rem;
  }

  span {
    font-size: 13px;
    font-weight: 400;
  }
`

export const BodyContent = styled('div')`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;

  .main-text {
    color: #525252
  }

  .subtext {
    font-size: 11px;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }

  .text-box {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .buttons-container {
    display: flex;
    width: max-content;
    flex-direction: column;
    align-self: flex-end;
    gap: 0.2rem;
  }

  .box1 {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    max-height: 100%;
    gap: 2rem;

    @media (min-width: 1024px) {
      min-width: 18rem;
    }

    @media (min-width: 1028px) {
      min-width: 22rem;
    }
  }

  .box2 {
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    max-height: 100%;
    gap: 0.5rem;

    @media (min-width: 1024px) {
      min-width: 25rem;
    }

    @media (min-width: 1028px) {
      min-width: 30rem;
    }
  }

  .box3 {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    max-height: 100%;
    justify-content: space-between;

    @media (min-width: 1024px) {
      min-width: 15rem;
    }

    @media (min-width: 1028px) {
      min-width: 22rem;
    }
  }
`

export const TimeContainer = styled('div')`
  display: flex;
  padding: 18px 10px 18px 10px;
  flex-direction: column;
  border: 1px solid rgba(0 0 0 / 0.1);
  border-radius: 8px;
  background-color: white;
  gap: 0.5rem;

  .row1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-direction: row;

    a {
      font-family: 'Oxygen';
      font-weight: 700;
      font-size: 15px;
      align-items: center;
      min-width: 2rem;
    }
  }
`

export const ButtonIcon = styled(Button)`
  &&.MuiButtonBase-root {
    padding: 2px;
    min-width: auto;
  }

  img {
    width: fit-content;
    height: fit-content;
  }
`

export const ColorfulButton = styled(Button)<ButtonProps>`
  && {
    &.MuiButtonBase-root {    
      font-size: 14px;
      font-weight: 400;
      width: 100%;
      background-color: ${(props) => (
        props.background == 'purple' ? '#828DD4' :
        props.background == 'green' ? '#88D182' : '#F3F3F3')};
      border-radius: 10px;
      text-transform: none;
      color: ${(props) => (props.background == 'neutral' ? '#828DD4' : 'white')};
    }
   }
`

export const CustomButton = styled(Button)`
   && {
    &.MuiButtonBase-root {
      width: fit-content;
      border: 1px solid rgba(0 0 0 / 0.1);
      background-color: white;
      border-radius: 8px;
      padding: 10px;
      text-transform: none;
      color: #828DD4;
    }
   }

   a {
    
    font-size: 15px;
    font-weight: 400;
   }
`

export const ContainerText = styled('div')`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0 0 0 / 0.1);
  justify-content: space-between;
  padding: 15px;
  flex-direction: row;
  background-color: white;
  border-radius: 8px;

  span {
    font-weight: 500;
    color: #000000;
    font-size: 14px;
    line-height: 17.68px;
  }
`

export const DayButton = styled(ButtonBase)<ButtonProps>`
  padding: 0;
  cursor: pointer;
  min-height: auto;
  min-width: auto;
  font-family: 'Oxygen';
  text-transform: none;
  font-weight: 400;
  font-size: small;
  line-height: 17.68px;
  border: none;
  border-radius: 3.5rem;

  a {
    color: ${(props) => (props.selected === 'true' ? 'white' : '#000000')};
  }
`

export const ButtonContainer = styled('div')<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${props => props.selected === 'true' ? 'none' : '1px solid #828DD4'};
   border-radius: 99px;
   min-width: 41px;
   min-height: 41px;
   background-color: ${(props) => (props.selected === 'true' ? '#828DD4' : 'white')};

   a {
      height: 100%;
      width: 100%;
      line-height: 25.25px;      ;
      font-family: 'Oxygen';
      font-size: 20px;
      font-weight: 400;
   }
`