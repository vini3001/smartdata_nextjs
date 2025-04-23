import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  && {
    .MuiTab-root {
      min-height: 1.75rem;
      margin-top: 0.125rem;
      height: 1.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.088rem;
      color: ${(props) => props.theme.colors.tabs.text};
      border-radius: 1.5rem;
      width: 50%;
      transition: background-color 0.6s;
    }

    .MuiTab-root:hover {
      background-color: ${(props) => props.theme.colors.tabs.hover.background};
    }

    .Mui-selected {
      width: 50%;

      min-height: 1.75rem;
      height: 1.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.088rem;
      color: ${(props) => props.theme.colors.tabs.text};
      background-color: ${(props) =>
        props.theme.colors.tabs.backgroundSelected};
      border: 0.002rem #0000000a solid;
      border-radius: 1.5rem;
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
      border-radius: 1.5rem;
      background-color: ${(props) => props.theme.colors.tabs.background};
      height: 2rem;
      min-height: 2rem;
    }

    .MuiBox-root {
      padding: 0px;
    }
  }
`;
