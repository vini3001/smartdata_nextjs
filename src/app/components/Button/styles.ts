import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Button)<{ variantbutton?: "primary" | "secondary" }>`
   && {
    text-transform: none;

    &[variantbutton="primary"] {

      &.MuiButton-text {
        color: ${(props) => {console.log(props);return props.theme.colors.button.primary.text}};
      }
    }

    &[variantbutton="secondary"] {
      background-color: ${(props) =>
        props.theme.colors.button.secondary.background};

      &.MuiButton-text {
        color: ${(props) => props.theme.colors.button.secondary.text};
      }
    }
  }
`;
