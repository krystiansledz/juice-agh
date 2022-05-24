import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import React from "react";

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        overflow: "auto",
      },
      "MuiDrawer-paper": {
        backgroundColor: "red",
      },
    }}
  />
);

export default GlobalStyles;
