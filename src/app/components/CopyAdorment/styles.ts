import { InputAdornment } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled(InputAdornment)`
  .MuiIconButton-root {
    width: 16px;
    height: 16px;
    padding: 0px;
  }

  .MuiIconButton-edgeStart {
    padding-left: 10px;
    margin-right: 4px;
  }

  .MuiIconButton-edgeEnd {
    margin-right: 0px;
  }

  .copy-adornment svg {
    font-size: 16px;
  }

  .icon-adornment {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
