import { Box, ButtonBase } from "@mui/material";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export const Container = styled(Box)`
  padding-inline: 5px;
  max-width: 8rem;
  border-radius: 8px;
  background-color: #FAFAFA;

  .time-container {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
  }
`

export const CustomDateTimePicker = styled(DesktopTimePicker)`
  .MuiInputBase-root {
    padding-right: 0
  }

  .MuiInputBase-input {
    width: 5rem;
    padding: 5px 5px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`

export const ContainerArrows = styled.div`
  display: flex;
  flex-direction: column;
`

export const CustomButton = styled(ButtonBase)`
  && {
    &.MuiButtonBase-root {
        border-radius: 5px;
        height: fit-content;
        min-width: 30px;
        padding: 0;
    }
  }
`