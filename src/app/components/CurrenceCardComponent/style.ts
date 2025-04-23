import styled from "@emotion/styled";

export const Container = styled.div`
  width: 34.375rem;
  height: 3.813rem;
  background-color: ${(props) =>
    props.theme.colors.currenceCardComponent.background};
  border-radius: 1rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.currenceCardComponent.hover.background};
  }
`;

export const ContainerCurrenceName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12.5rem;
`;

export const ContainerCurrenceValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 14.25rem;
`;

export const CurrenceName = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: Oxygen;
  font-weight: 700;
  word-wrap: break-word;
`;

export const CurrenceNameAbbreviated = styled.span`
  color: ${(props) => props.theme.colors.subtitles};
  font-size: 0.875rem;
  font-family: Oxygen;
  font-weight: 500;
  line-height: 1.125rem;
  word-wrap: break-word;
`;

export const CurrenceValue = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: Oxygen;
  font-weight: 500;
  line-height: 1.25rem;
  word-wrap: break-word;
`;

export const CurrenceTotalValue = styled.span`
  color: ${(props) => props.theme.colors.subtitles};
  font-size: 0.875rem;
  font-family: Oxygen;
  font-weight: 500;
  line-height: 1.125rem;
  word-wrap: break-word;
`;
