import styled from "styled-components";

interface ContainerProps {
  opensidebar: 'true'  | 'false';
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "opensidebar",
})<ContainerProps>`
   .MuiFormControl-root {
    display: flex;
    justify-content: center;
   }

  .MuiToolbar-root {
    @media (min-width: 600px) {
      min-height: 3.2rem;
    }
  }

  .MuiAppBar-root {
    background-color: ${(props) => props.theme.colors.appBar.background};
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.colors.icon.color};
  }
`;

export const ContainerLogo =  styled.div`
 display: flex;
 max-height: 100%;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 2rem;
  width: 100%;
`;

export const ContainerIcons = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: row;
  gap: 1.5rem;
`

export const CustomHeader = styled.header`
  background-color: #323650;
`

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;

  .container-icon {
    background-color: ${(props) => props.theme.colors.icon.background};
    border-radius: 100%;
    margin-right: 1rem;
  }

  .container-name {
    width: 7rem;

    span {
      font-weight: 500;
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;