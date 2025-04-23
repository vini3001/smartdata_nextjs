import { Divider, Pagination } from "@mui/material"
import styled from "@emotion/styled"

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

  .text-footer {
    display: flex;
    padding-left: 0.8rem;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }
`

export const CustomLabelPaginate = styled(Pagination)`
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 1rem;

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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 0.3rem;
`

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr 1fr;
  height: 3rem;
  padding-right: 0.8rem;
  background-color: #FAFAFA;
  align-items: center;
  justify-items: center;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 34px;
  }

  .perfil-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 77.55px;
  }

  .title-container {
    display: flex;
    padding: 0.8rem;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    overflow: hidden;

    a {
        font-family: 'Oxygen';
        font-weight: 500;
        line-height: 15.15px;
        font-size: 16px;
        width: 100%; 
    }
  }

  .document-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .hour-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
`

export const ListHeaderInfo = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr 1fr;
  padding-right: 12.8px;
  height: 3rem;
  background-color: #FAFAFA;
  align-items: center;
  justify-items: center;

  a {
        font-family: 'Oxygen';
        font-weight: 700;
        text-align: center;
        color: #000000;
        text-transform: uppercase;
        line-height: 15.15px;
        font-size: 11px;
    }

  .title-container {
    display: flex;
    width: 100%;
    padding: 0.8rem;
    align-items: center;
    height: 100%;
  }

  .document-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .hour-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .icon-container {
    height: 100%;
    width: 34px;
  }
`

export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 99px;
   min-width:35px;
   min-height: 35px;
   background-color: #828DD4;;

   span {
      color: white;
      height: 100%;
      margin-right: 1px;
      font-family: 'Oxygen';
      font-size: 14px;
      font-weight: 700;
   }
`

export const ListButton = styled.button`
   all: unset;
   cursor: pointer;
`