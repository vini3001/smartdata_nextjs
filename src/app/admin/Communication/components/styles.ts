import { Box, Button, Divider, Pagination, Table } from "@mui/material"
import styled from "styled-components"

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

export const TableCustom = styled(Table)`
  .MuiTableCell-root {
    font-family: unset;
  }
`

export const ListButton = styled(Button)`
   all: unset;
   width: 100%;
   height: 100%;
   cursor: pointer;
`

export const ContainerModal = styled(Box)`
  overflow: auto;
  width: 80vw;
  padding-right: 0.5rem;
`

export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

export const ArchiveBox = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border: 1px solid #DCDCDC;
  background-color: ${(props) => props.theme.colors.background};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`

export const PreviewBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid #DCDCDC;
  border-top: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  gap: 1rem;

  .box-file {
    display: flex;
    border-radius: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50%;
    overflow: hidden;
    min-height: 10rem;
    max-height: 20rem;
    border-style: dashed;
    border-width: 2px;
    border-color: #828DD4;
    cursor: pointer;

    h4 {
      color: #DCDCDC;
      height: fit-content;
      font-size: 25px;
    }

    input {
      position: absolute;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 1;
    }

    img {
      position: absolute;
      aspect-ratio: 4/4;
      object-fit: cover;
      max-height: 100%;
      cursor: pointer;
    }
  }
`

export const FormButton = styled(Button)`
  && {
    &.MuiButtonBase-root {    
      font-size: 14px;
      font-weight: 400;
      width: 10rem;
      border-radius: 10px;
      text-transform: none;
    }
   }
`

export const BoxDownloadIcon = styled(Box)`
  a {
    all: unset;

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
`