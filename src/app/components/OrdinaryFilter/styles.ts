import { ButtonBase } from "@mui/material";
import styled from "@emotion/styled";

export const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  [hidden] {
    display: none !important;
  }

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
  height: 2rem;
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