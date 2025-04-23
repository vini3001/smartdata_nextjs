import styled from "@emotion/styled";
import { ButtonBase } from "../..";

export const TwoFactorAuthanticationContainer = styled.div`
  width: 26.688rem;
  display: flex;
  flex-direction: column;
`;

export const ButtonOpenModal = styled(ButtonBase)`
  height: 3rem;
`;

export const TwoFactorAuthanticationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TwoFactorAuthanticationContentTitle = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-family: Oxygen;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.0125rem;
`;

export const TwoFactorAuthanticationContentSub = styled.div`
  color: ${(props) => props.theme.colors.text.info};
  text-align: center;
  font-family: Oxygen;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const TwoFactorAuthanticationContentImg = styled.div`
  width: 5.875rem;
  height: 5.875rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.content};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    width: 3.875rem;
    height: 3.875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;
