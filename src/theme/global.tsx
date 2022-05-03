import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import React from "react";

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        overflow: "hidden",
        backgroundColor: "#333333",
      },
    }}
  />
);

export default GlobalStyles;
