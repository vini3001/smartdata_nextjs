'use client'

import React, { useState } from "react";
import { ThemeProvider as EmotionThemeProvider} from "@mui/material";
//import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import ThemeDark from "./dark";
import ThemeLight from "./light";

export interface Props {
  children: React.ReactNode;
}

const ThemeProvider = function Content(props: Props): React.ReactNode {
  const [theme] = useState("1");

  return (
    <EmotionThemeProvider theme={theme === "1" ? ThemeLight : ThemeDark}>
      {props.children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
