import { BoxContentBase, ButtonBase } from "@/app/components";
import styled from "styled-components";

export const Container = styled(BoxContentBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
`;

export const ContainerEmail = styled.div`
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h1 {
    color: #323650;
    font-weight: 400;
    font-size: 32px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25rem;
  height: auto;
  gap: 2rem;
`

export const ContainerButtonsAuth = styled.div`
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
`;

export const ButtonSignIn = styled(ButtonBase)`
  height: 2.938rem;
  width: 100%;

  && {
    border-radius: 99px;
    background-color: #323650;
  }
`;
