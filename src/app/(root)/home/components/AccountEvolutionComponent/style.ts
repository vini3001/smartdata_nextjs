import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountEvolutionTitle = styled.div`
  color: ${(props) => props.theme.colors.text.info};
  font-size: 0.625rem;
  font-family: Oxygen;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.088rem;
  word-wrap: break-word;
  padding-bottom: 1rem;
`;

export const AccountEvolutionValue = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 2rem;
  font-family: Oxygen;
  font-weight: 700;
  line-height: 2.125rem;
  word-wrap: break-word;
`;

export const AccountEvolutionSelectBox = styled.div`
  .MuiOutlinedInput-root {
    height: 1.75rem !important ;
    border-radius: 6.25rem !important;
  }
`;

export const AccountEvolutionTransactions = styled.div`
  color: ${(props) => props.theme.colors.text.info};
  font-size: 0.875rem;
  font-family: Oxygen;
  font-weight: 500;
  line-height: 1.125rem;
  word-wrap: break-word;
`;

export const AccountEvolutionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
`;

