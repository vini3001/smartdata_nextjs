import styled from "styled-components";

export const DestributionRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
  height: 2.25rem;
  padding: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.destributionCurrence.hover.background};
  }
`;

export const DestributionTitle = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: Oxygen;
  font-weight: 600;
  word-wrap: break-word;
  width: 100%;
  padding-left: 0.5rem;
`;

export const DestributionCurrencePorcentage = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: Oxygen;
  font-weight: 500;
  line-height: 1.25rem;
  word-wrap: break-word;
`;

