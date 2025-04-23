import styled from "@emotion/styled"

interface userIconProps {
  size: 'small' | 'medium' | 'large'
}

export const ButtonContainer = styled.div<userIconProps>`
   display: flex;
   position: relative;
   align-items: center;
   justify-content: center;
   border-radius: 99px;
   background-color: #828DD4;;

   span {
      position: relative;
      height: fit-content;
      width: fit-content;
      text-align: center;
      color: white;
      //margin-right: 1px;
      font-family: 'Oxygen';
      font-size: ${(props) => props.size === 'small' ? '14px' : props.size === 'medium' ? '20px' : '35px'};
      font-weight: 700;
   }
`