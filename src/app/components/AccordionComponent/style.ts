import styled from "styled-components";

export const AccordionContainer = styled.div`
  margin-top: 0.938rem;

  .MuiAccordionSummary-content {
    justify-content: space-between;
    padding-right: 0.75rem;
  }

  .MuiAccordion-root {
    box-shadow: 0rem 0.125rem 0.5rem 0rem #0000001f;
    border: 0.125rem solid;
    border-color: ${(props) => props.theme.colors.accordion.borderColor};
    background-color: ${(props) => props.theme.colors.accordion.background};
  }

  .MuiAccordion-root:last-of-type {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }

  .MuiAccordion-root:first-of-type {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  .MuiSvgIcon-root {
    background-color: ${(props) => props.theme.colors.accordion.backgroundIcon};
    border-radius: 100%;
  }
`;

export const AccordionTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.193rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const AccordionSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: ${(props) => props.theme.colors.text.info};

  .accordion-value {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.125rem;
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
