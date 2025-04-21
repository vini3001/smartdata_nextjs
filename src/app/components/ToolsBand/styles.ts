import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  h4 {
    font-size: 20px;
  }

  .icon-container {
      height: fit-content;
      padding: 0.2rem;
   }

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  span {
    font-size: smaller;
  }
`