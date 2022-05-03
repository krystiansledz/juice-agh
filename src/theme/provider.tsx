import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import React from "react";

import GlobalStyles from "./global";
import defaultOptions from "./defaults";

type Props = {
  children: JSX.Element;
};

const ThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const theme = createTheme(defaultOptions);

  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
};

export default ThemeProvider;
