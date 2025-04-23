import { ButtonBase } from "@mui/material";
import styled from "@emotion/styled";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  .icon-container {
      display: flex;
      align-items: center;
      height: 100%;
      //padding: 0.2rem;
   }

  span {
    font-size: smaller;
    //margin-bottom: 0.2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0.8rem;
  }
`

export const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  .filter-vectors {
    display: flex;
    gap: 0.2rem;
  }
`

export const CustomIconLeft = styled(ButtonBase)`
  &&.MuiButtonBase-root {
    padding: 0.5rem;
    border-top-left-radius: 99px; /* 8px */
    border-bottom-left-radius: 99px; /* 8px */
    background-color: white;
    cursor: pointer;
    min-width: auto;
  }
`

export const CustomIconRight = styled(ButtonBase)`
  &&.MuiButtonBase-root {
    padding: 0.5rem;
    border-top-right-radius: 99px; /* 8px */
    border-bottom-right-radius: 99px; /* 8px */
    background-color: white;
    cursor: pointer;
    min-width: auto;
  }
`

export const CustomIcon = styled(ButtonBase)`
  height: 90%;;
  gap: 0.5rem; 

  &&.MuiButtonBase-root{
      display: flex;
      flex-direction: row;
      border-radius: 99px;
      background-color: white;
      justify-content: space-around;
      padding: 3px;
      align-items: center;
      cursor: pointer;
      min-width: auto;
   }

  .icon-separator {
    display: flex;
    height: 100%;
    align-items: center;
    min-width: 1.5rem;
  }

   a {
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
   }
`