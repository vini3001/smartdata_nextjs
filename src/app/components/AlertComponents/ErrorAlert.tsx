import { ReactElement } from "react";
import { ContainerMessage, CustomAlertStyled } from "./styles";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { ErrorOutline } from "@mui/icons-material";
import { Box } from "@mui/material";

interface CustomErrorAlertProps {
    children: ReactElement<unknown, any>;
    title: string
    open: boolean
  }

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "13px",
            color: "#d32f2f",
            border: '1px solid #E8E8E8',
            backgroundColor: "#fdeded",
          },
          arrow: {
            color: "#fdeded",
            "&:before": {
              border: "1px solid #E8E8E8"
            },
          },
          popper: {
            zIndex: 1300
          }
        },
      },
    },
  });

export default function CustomErrorAlert({children, title, open}: CustomErrorAlertProps) {
    return (
      <ThemeProvider theme={theme}>
        <CustomAlertStyled open={open} title={<ContainerMessage><ErrorOutline />{title}</ContainerMessage>} arrow>
            {children}
        </CustomAlertStyled>
      </ThemeProvider>
    )
}