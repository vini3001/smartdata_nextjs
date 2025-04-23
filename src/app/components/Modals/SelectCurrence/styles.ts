import styled from "@emotion/styled";
import { ButtonBase } from "../..";

export const SelectCurrenceContainer = styled.div`
  width: 30.3125rem;
  display: flex;
  flex-direction: column;
`;

export const ButtonOpenModal = styled(ButtonBase)`
  height: 3rem;
`;

export const FilterCurrenceTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const FilterCurrenceTypeBox = styled(ButtonBase)<{
  isSelected: boolean;
}>`
  border-radius: 6.25rem;
  background: ${(props) =>
    props.isSelected
      ? props.theme.colors.button.primary
      : props.theme.colors.textField.background} !important;
  display: flex;
  height: 1.75rem;
  width: 100%;
  padding: 0.25rem 0.625rem;
  align-items: flex-start;
`;

export const FilterCurrenceTypeText = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: Oxygen;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FilterCurrenceTypeImg = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.textField.background};
  cursor: pointer;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
