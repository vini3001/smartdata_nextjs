'use client'

import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ThemeDark from "./dark";
import ThemeLight from "./light";

export interface Props {
  children: React.ReactNode;
}

const EmotionThemeProvider = function Content(props: Props): React.ReactNode {
  const [theme] = useState("1");


  return (
    <ThemeProvider theme={theme === "1" ? ThemeLight : ThemeDark}>
      {props.children}
    </ThemeProvider>
  );
};

export default EmotionThemeProvider