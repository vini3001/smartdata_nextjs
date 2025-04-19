import { BoxContentBase } from "@/presentation/components";
import { Button, Divider, Pagination } from "@mui/material";
import styled from "styled-components";

//Referente à visualização no modo grid ---------------------------------------------------------------------------->

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: auto;
  gap: 0.5rem;

  @media (min-width: 1280px) {

    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const CardContainer = styled(BoxContentBase)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 1rem;

  .image-container {
    aspect-ratio: 6/3;
  }
`

export const CardButton = styled(Button)`
  
  &&.MuiButtonBase-root {
    padding: 2px;
    min-width: auto;
  }

  img {
    height: 100%;
    width: 100%;
  }
`

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon-container {
    display: flex;
    height: fit-content;
    flex-direction: row;
    gap: 0.5rem
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    span {
        font-family: Oxygen;
        font-weight: 300;
        line-height: 13.89px;
        font-size: smaller;
        text-transform: none;
        width: 100%;
    }

    a {
        font-family: Oxygen;
        font-weight: 500;
        line-height: 15.15px;
        font-size: small;
        width: 100%; 
    }
  }
`

//Referente à visualização no modo lista ---------------------------------------------------------------------------->

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListStrip = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .icon-container {
    display: flex;
    border-radius: 5px;
    background-color: #D6D9EF;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    min-width: 17.5rem;
    height: 100%;
    flex-direction: row;
    gap: 0.5rem
  }

  .title-container {
    display: flex;
    background-color: #D6D9EF;
    padding: 0.2rem;
    border-radius: 5px;
    height: 100%;
    width: 80%;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
  }
`

export const ListContent = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .icon-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    height: 100%;
    flex-direction: row;
    gap: 0.5rem
  }

  .title-container {
    display: flex;
    padding: 0.8rem;
    border-radius: 5px;
    height: 100%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    background-color: white;

    span {
        font-family: 'Oxygen';
        font-weight: 300;
        line-height: 13.89px;
        font-size: 13px;
        text-transform: none;
        width: 100%;
    }

    a {
        font-family: 'Oxygen';
        font-weight: 500;
        line-height: 15.15px;
        font-size: 16px;
        width: 100%; 
    }
  }
`

export const ListButton = styled(Button)`
  
&&.MuiButtonBase-root {
  background-color: white;
  height: 100%;
  width: 100%;
  //padding: 1.2rem;
}

img {
  height: auto;
  min-width: 19px;
  width: fit-content;
}
`

//Referente à customização de ambas as visualizações ---------------------------------------------------------------------------->

export const PaginationContent = styled.div`
  width: 100%;
  max-height: 55vh;
  overflow-y: auto;
  overflow-x: hidden;
`

export const CustomDivider = styled(Divider)`
  && {
    &.MuiDivider-root {
       margin: 0.5rem;
       margin-top: 1rem;
    }
  }
`

export const PaginationContainer = styled.section`
  height: 100%;
`

export const CustomLabelPaginate = styled(Pagination)`
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 0;
  margin: 0;
  //margin-top: 0.5rem;

  .MuiButtonBase-root {
    color: #DDDDDD;
    font-size: 13px;
    font-weight: 400;
    text-decoration: unset;
    background-color: unset;

    &.Mui-selected {
      background-color: unset;
    }

    &:hover {
          color: black;
      };
  }

  a {
      color: #DDDDDD;
      font-size: 13px;
      font-weight: 400px;
      text-decoration: unset;

      
  };

  li {
      margin: 0;  
      padding: 0;   
      list-style-type: none; 
      display: flex;
      cursor: pointer;
      justify-content: center;
      width: 40px;
  }
`