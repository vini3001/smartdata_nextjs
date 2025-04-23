'use client'

import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';

export interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider = function Content(props: Props): React.ReactNode {
  const theme = createTheme({
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider