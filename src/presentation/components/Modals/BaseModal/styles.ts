import Backdrop from "@mui/material/Backdrop";
import { Modal as BaseModal } from '@mui/base/Modal'
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: #1b1b1b;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
  }

  .subtitle {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
`;

export const Modal = styled(BaseModal)`
  position: absolute;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-box {
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    max-height: calc(100% - 70px);
    overflow: hidden;
  }
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;