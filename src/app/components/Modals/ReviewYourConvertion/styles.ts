import styled from "@emotion/styled";
import { ButtonBase } from "../..";

export const ReviewYourConvetionContainer = styled.div`
  width: 26.688rem;
  display: flex;
  flex-direction: column;
`;

export const ReviewYourConvetionImgRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ReviewYourConvertionCurrenceImg = styled.div`
  width: 4.625rem;
  height: 4.625rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.content};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const ReviewYourConvertionArrowRight = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.content};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    width: 1.6875rem;
    height: 1.6875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const ButtonOpenModal = styled(ButtonBase)`
  height: 3rem;
`;

export const ButtonConvert = styled(ButtonBase)`
  height: 3rem;
  width: 100%;
`;

export const ReviewYourConvertionTitle = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-family: Oxygen;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.0125rem;
  margin-top: 0.5rem;
  margin-bottom: 3.5rem;
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

export const TwoFactorAuthanticationButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
`;
