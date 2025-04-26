import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  && {
    .MuiTab-root {
      font-family: 'Oxygen';
      text-transform: none;
      min-height: 1.75rem;
      margin-top: 0.125rem;
      height: 1.75rem;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.088rem;
      color: ${(props) => props.theme.colors.tabs.text};
      flex: 1;
      min-width: 90px;
      max-width: 360px;
      transition: background-color 0.6s;
    }

    .MuiTab-root:hover {
      background-color: ${(props) => {console.log(props.theme);return props.theme.colors.tabs.hover.background}};
    }

    .Mui-selected {
      min-width: 90px;
      flex: 1;
      max-width: 360px;
      min-height: 1.75rem;
      height: 1.75rem;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.088rem;
      color: ${(props) => props.theme.colors.tabs.text};
      background-color: unset;
      border-bottom: 2px solid #828DD4;
      box-shadow: 0rem 0.188rem 0.063rem #0000000a;
      margin: 0.125rem 0.125rem;
    }

    .MuiTabs-indicator {
      height: 0rem;
    }

    .MuiTabs-flexContainer {
      justify-content: space-between;
    }

    .MuiTabs-root {
      display: flex;
      justify-content: center;
      background-color: none;
      height: 2rem;
      min-height: 2rem;
    }

    .MuiBox-root {
      padding: 0px;
    }
  }
`;
