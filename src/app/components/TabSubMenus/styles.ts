import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styled from "styled-components";

interface ContentProps {
  opensidebar: boolean;
}

export const Container = styled.div<ContentProps>`
  width: calc(
    100% - ${(props) => (props.opensidebar ? "13.25rem" : "5.25rem")}
  );
  margin: 3.5rem 1.25rem 0 auto;
`;

export const TabsComponents = styled(Tabs)`
  background-color: ${(props) => props.theme.colors.background};

  .MuiButtonBase-root {
    margin-bottom: 0.8rem;
  }

  .MuiTabs-indicator {
    height: 4px;
    border-radius: 2px 2px 0px 0px;
    background-color: ${(props) =>
      props.theme.colors.button.primary.background};
  }

  .Mui-selected {
    background-color: ${(props) => props.theme.colors.icon.background};
    border-radius: 100px;
  }

  .Mui-selected,
  .MuiTab-textColorPrimary {
    color: ${(props) => props.theme.colors.button.secondary.text} !important;
    font-weight: bold;
    text-transform: none;
  }
`;

export const TabComponent = styled(Tab)``;
