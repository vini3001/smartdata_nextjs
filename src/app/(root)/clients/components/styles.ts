import { Box, Button, ButtonBase, Divider, Pagination, Table } from "@mui/material"
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

export const TableCustom = styled(Table)`
  .MuiTableCell-root {
    font-family: unset;
  }
`

export const ListButton = styled(ButtonBase)`
  && {
    &.MuiButtonBase-root {
      border-radius: 99999px;
      padding: 10px;
      min-width: 0;
      color: #828DD4
    }
  };

   display: flex;
   justify-content: center;
   height: 100%;
   cursor: pointer;
`

export const RegisterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  max-height: 20rem;
  overflow-y: auto;
  padding: 8px;
  border: 1px solid #DCDCDC;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CustomContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  max-height: 20rem;
  overflow-y: auto;
  padding: 8px;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border: 1px solid transparent;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`

export const ContainerModal = styled(Box)`
  overflow: auto;
  width: 95vw;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
`
export const ModalContentGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormContainer = styled.form`
   display: flex;
   position: relative;
   flex-direction: column;
   gap: 1.2rem;
`

export const FormButton = styled(Button)`
  && {
    &.MuiButtonBase-root {    
      align-items: center;
      font-weight: 400;
      text-wrap: nowrap;
      padding-inline: 12px;
      min-width: 10rem;
      border-radius: 10px;
      text-transform: none;
    }
   }
`

export const DeleteButton = styled(Button)`
  && {
    &.MuiButtonBase-root {    
      align-items: center;
      font-weight: 400;
      text-wrap: nowrap;
      padding-inline: 12px;
      min-width: 5rem;
      border-radius: 10px;
      text-transform: none;
    }
   }
`

export const LabelPeople = styled(Box)`
    display: flex;
    height: 50px;
    background-color: rgb(245, 245, 245);
    width: 100%;
    align-items: center;
    font-weight: 400;
    text-wrap: nowrap;
    padding: 6px;
    padding-inline: 12px;
    min-width: 10rem;
    border-radius: 10px;
    text-transform: none;
`

export const BoxDownloadIcon = styled(Box)`
  display: flex;
  justify-content: center;
`

export const TemplateButton = styled(Button)`
  && {
    &.MuiButtonBase-root {    
      font-size: 14px;
      font-weight: 400;
      text-wrap: nowrap;
      padding-inline: 12px;
      min-width: 10rem;
      border-radius: 10px;
      text-transform: none;
    }
   }
`

export const PreviewBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  gap: 1rem;

  .box-file {
    display: flex;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 7rem;
    overflow: hidden;
    border-style: dashed;
    border-width: 2px;
    border-color: #828DD4;
    cursor: pointer;

    h4 {
      color: #DCDCDC;
      height: fit-content;
      font-size: 20px;
    }

    .input-class {
      position: absolute;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 100;
    }

    img {
      position: absolute;
      object-fit: cover;
      aspect-ratio: 1/1;
      max-height: 100%;
      width: 100%;
      max-height: auto;
      cursor: pointer;
    }
  }
`