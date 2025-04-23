import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .MuiLinearProgress-root {
    border-radius: 6.25rem;
    height: 0.25rem;
    width: 100%;
  }
`;

export const ContainerTime = styled.div`
  border-radius: 6.25rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.content};
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.625rem;
  width: 50%;

  span {
    margin: 0;
    font-weight: bold;
  }
`;
