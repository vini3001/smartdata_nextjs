import { BoxContentBase, ButtonBase } from "@/app/components";
import { Checkbox } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled(BoxContentBase)`
  display: flex;
  position: relative;
  align-items: center;
  background-color: transparent;
`;

export const ContainerEmail = styled.div`
  margin-bottom: 1rem;
`;

export const ContainerPassword = styled.div`
  margin-bottom: 1rem;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  margin: 1.5rem 0;
`;

export const ContainerRememberDevice = styled.div`
  align-items: center;
  display: flex;

  span {
    font-style: normal;
    text-wrap: nowrap;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text.primary};
  }
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
  align-items: center;
  width: 100%;
  height: auto;
`

export const ContainerTextForgot = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: end;
  width: 14rem;
  height: 2.25rem;

  span {
    height: fit-content;
    color: #323650;
    font-size: 14px;
    font-weight: 400;
    text-align: end;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ContainerButtonsAuth = styled.div`
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
`;

export const ButtonRegister = styled(ButtonBase)`
  height: 2.938rem;
`;

export const ButtonSignIn = styled(ButtonBase)`
  height: 2.938rem;
  width: 100%;
  
  && {
    border-radius: 99px;
    background-color: #323650;
  }
`;

export const CheckBoxRemember = styled(Checkbox)`
  
`