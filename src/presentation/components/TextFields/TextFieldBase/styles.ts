import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextFieldCustom = styled(TextField)`
  && {
    .Mui-error {
      background-color: ${(props) =>
        props.theme.colors.errors.backgroundErrorField} !important;
    }

    .MuiInputBase-root {
      height: 40px;
      margin-bottom: 0px;
      border-color: #DCDCDC;
      background-color: ${(props) => props.theme.colors.textField.background};
      gap: 0.2rem;

      .MuiSvgIcon-root {
        margin-right: 0.2rem;
        color: ${(props) => props.theme.colors.textField.iconColor};
      }
    }

    .MuiFormHelperText-root {
      color: ${(props) => props.theme.colors.errors.messageErrorField};
      z-index: 1;
      font-size: 14px;

      background-color: transparent !important;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: #DCDCDC;
    }

    .MuiOutlinedInput-root {
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #828dd4;
      }
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #828dd4;
      }
    }
  }
`;

export const Label = styled.span`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.subtitles};
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 1.4px;
`;

export const Title = styled.a`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.subtitles};
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 1.4px;
`