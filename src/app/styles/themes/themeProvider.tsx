'use client'

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeDark from "./dark";
import ThemeLight from "./light";

export interface Props {
  children: React.ReactNode;
}

const themeProvider = function Content(props: Props): React.ReactNode {
  const [theme] = useState("1");

  return (
    <ThemeProvider theme={theme === "1" ? ThemeLight : ThemeDark}>
      {props.children}
    </ThemeProvider>
  );
};

export default themeProvider;
