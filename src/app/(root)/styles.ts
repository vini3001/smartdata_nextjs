import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

interface ContentProps {
  opensidebar: boolean;
}

export const Container = styled.section`
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`

export const Content = styled.div<ContentProps>`
  width: calc(
    100% - ${(props) => (props.opensidebar ? "13.25rem" : "5.25rem")}
  );
  margin-right: 1.25rem;
  min-height: calc(100% - 2.75rem - 6.5rem);
  border-radius: 1rem 1rem 0px 0px;
  background-color: ${(props) => props.theme.colors.content};
  margin-left: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: #FAFAFA;
  overflow-y: auto;
  overflow-x: hidden;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  flex-direction: row;
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: end;
  bottom: 0;

  span {
    font-family: 'Oxygen';
    font-weight: 400;
    font-size: 14px;
    line-height: 17.68px;
  }

  .image-container {
    all: unset;
    display: flex;
    position: fixed;
    cursor: pointer;
    justify-content: end;
    right: 20px;
    bottom: 20px;
    align-items: end;
  }
`

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding-left: 2rem;
`;

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