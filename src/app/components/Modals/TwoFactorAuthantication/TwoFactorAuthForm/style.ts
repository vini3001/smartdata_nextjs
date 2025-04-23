import { ButtonBase } from "@/app/components";
import styled from "@emotion/styled";

export const TwoFactorAuthanticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextFieldBox = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4.125rem;
  gap: 0.5rem;

  .hLhzvM {
    color: ${(props) => props.theme.colors.text.primary};
  }

  .MuiOutlinedInput-input {
    color: ${(props) => props.theme.colors.text.primary};
    width: 15px;
  }

  .MuiTextField-root {
    width: 100%;
  }
`;

export const TextFieldDivider = styled.div`
  display: flex;
  width: 2.375rem;
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.headline1};
  margin: 0 0.5rem;
`;

export const ButtonSendCode = styled(ButtonBase)`
  margin-top: 1rem;
  width: 100%;
  height: 3rem;
`;
