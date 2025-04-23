import { Button, Divider, ListItemButton, Pagination } from "@mui/material";
import styled from "@emotion/styled";

interface ScheduleProps {
  isOpen?: 'true' | 'false'
  submenu: 'true' | 'false'
}

//estilização do dropdown ------------------------------------------------------------>
export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: relative;
  flex-direction: column; 

  &&[hidden] {
   display: none !important;
 }

   .MuiSvgIcon-root {
     color: #828DD4;
  }
`

export const CustomButtonContainer = styled(ListItemButton)`
  
  &&.MuiButtonBase-root{
     display: flex;
     min-width: 3.5rem;
     border-radius: 5px;
     gap: 0.5rem;
     position: relative;
     flex-direction: row;
     background-color: white;
     justify-content: space-between;
     padding: 5px;
     padding-right: 15px;
     align-items: center;
  }

  .icon-text {
     display: flex;
     align-items: center;
     gap: 0.5rem
  }

  .MuiListItemIcon-root {
     justify-content: end;
     min-width: auto
  }

  .MuiSvgIcon-root {
     font-size: 1rem;
  }
`

//estilização da listagem ------------------------------------------------------------>

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListStrip = styled.div`
  display: grid;
  grid-template-columns: 36% 40% 20%;
  grid-template-rows: 100%;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .icon-container {
    display: grid;
    grid-column: span 1 / span 1;
    border-radius: 5px;
    background-color: #D6D9EF;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: row;
    gap: 0.5rem
  }

  .title-container {
    display: grid;
    grid-column: span 1 / span 1;
    background-color: #D6D9EF;
    padding: 0.2rem;
    border-radius: 5px;
    height: 100%;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
  }

  .time-container {
    display: grid;
    grid-column: span 1 / span 1;
    background-color: #D6D9EF;
    padding: 0.2rem;
    border-radius: 5px;
    height: 100%;
    align-items: center;
    gap: 0.2rem;
    margin-left: 0.2rem;
  }
`

export const ListContent = styled.div<ScheduleProps>`
  display: grid;
  grid-template-columns: 36% 40% 20%;
  grid-template-rows: 100%;
  height: 3.1rem;
  align-items: center;
  gap: 1rem;
  margin-top: ${(props) => ((props.isOpen === "true" && props.submenu === "true") ? "1rem" : "0")};
  max-height: ${(props) => ((props.isOpen === "true" || props.submenu === "false") ? "3.1rem" : "0")};
  opacity: ${(props) => ((props.isOpen === "true" || props.submenu === "false") ? "1" : "0")};
  clip-path: ${(props) => ((props.isOpen === "true" || props.submenu === "false") ? "inset(0 0 0 0)" : "inset(0 0 100% 0)")};
  transition: clip-path 300ms ease-in-out, opacity 300ms ease-in-out, max-height 300ms ease-in-out;

  .icon-container {
    display: flex;
    grid-column: span 1 / span 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: row;
    gap: 0.5rem;
  }

  .title-container {
    display: grid;
    grid-column: span 1 / span 1;
    padding: 0.8rem;
    border-radius: 5px;
    height: 100%;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    background-color: white;
    opacity: ${(props) => (props.submenu === "true" ? "60%" : "100%")};

    span {
        font-weight: 300;
        line-height: 13.89px;
        font-size: 13px;
        text-transform: none;
        width: 100%;
    }

    a {  
        font-weight: 400;
        line-height: 18.94px;
        font-size: 15px;
        width: 100%; 
    }
  }

  .time-container {
    display: grid;
    grid-column: span 1 / span 1;
    background-color: white;
    border-radius: 5px;
    height: 100%;
    align-items: center;
    gap: 0.2rem;
    margin-left: 0.2rem;
    opacity: ${(props) => (props.submenu === "true" ? "60%" : "100%")};

    a {
      font-weight: 400;
      line-height: 18.94px;
      font-size: 15px;
      margin-left: ${(props) => (props.submenu === "true" ? "0.6rem" : "0.3rem")};
    }
  }
`

export const ListWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

export const ListButton = styled(Button)`
  
&&.MuiButtonBase-root {
  background-color: white;
  height: 100%;
  width: 100%;
  //padding: 1.2rem;
}

img {
  min-height: 19px;
  min-width: 19px;
}
`

export const PaginationContent = styled.div`
  width: 100%;
  max-height: 55vh;
  overflow-y: auto;;
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