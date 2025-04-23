import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background: ${(props) => props.theme.colors.currencePercentage.background};
  border-radius: 6.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  display: inline-flex;
  transition: background-color 0.6s;

  span {
    text-align: center;
    color: ${(props) => props.theme.colors.currencePercentage.text};
    font-size: 0.75rem;
    font-family: Oxygen;
    font-weight: 600;
    word-wrap: break-word;
  }

  &:hover {
    background: ${(props) =>
      props.theme.colors.currencePercentage.hover.background};
  }
`;
