import styled from "styled-components";

export const ConversionInformationContainer = styled.div`
  display: flex;
`;

export const ConversionInformationBoxColumn = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.content};
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0px 0.875rem;
`;
