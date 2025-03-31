import styled from "styled-components";

export const Container = styled.div`
  width: 10.375rem;
  height: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme.colors.content};
  border-radius: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  display: inline-flex;
  margin: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 0.875;
    font-family: Oxygen;
    font-weight: 500;
    line-height: 1.125rem;
    word-wrap: break-word;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.hover.primary.background};
  }
`;

export const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

