import { Backdrop } from "@mui/material";
import { ButtonBase } from "@/presentation/components";
import styled, { css } from "styled-components";

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

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalContent = styled('div')(
    () => css`
      font-weight: 500;
      text-align: start;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40vw;
      height: auto;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: ${(props) => props.theme.title === 'dark' ? grey[900] : '#FAFAFA'};
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.title === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.5);
      ${(props) => props.theme.title === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${(props) => props.theme.title === 'dark' ? grey[50] : grey[900]};
      gap: 2rem;
    `,
);

export const ModalBody = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    color: #000000;
`

export const HeaderCustom = styled.h4`
    text-align: center;
    font-size: 24px;
    color: #88D182;
`

export const ButtonOk = styled(ButtonBase)`
  && {
    font-size: 16px;
    width: 50%;
    border: 1px solid #000000;
    border-radius: 10px;
    color: #000000;
  }
`