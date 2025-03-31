import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   width: 100%;
   padding: 1rem;
   min-height: 4rem;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   && {
      .MuiListItemIcon-root {
         min-width: 30px;
         justify-content: center;
      }
   }

   img {
      color: #949494;
   }
`

export const FirstColumn = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
   cursor: pointer;

   span {
     display: flex;
     height: fit-content;
     color: #949494;
     margin-top: 3px;
     font-family: 'Oxygen';
     font-weight: 400;
     font-size: smaller;
     justify-content: end;
     align-items: end;
   }

   span:hover {
      text-decoration: underline;
   }
`

export const SecondColumn = styled.div`
   display: flex;
   flex-direction: row;

   span {
      display: flex;
      text-wrap: nowrap;
      margin-top: 3px;
      font-family: 'Oxygen';
      font-weight: 400;
      font-size: 15px;
   }
`

export const IconContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`