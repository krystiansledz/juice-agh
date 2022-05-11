import React from "react";
import RouterSwitch from "./router";
import Providers from "./providers";
import { Container } from "@mui/material";

function App() {
  return (
    <Providers>
      <Container
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          padding: "0 !important",
        }}
        maxWidth={false}
      >
        <RouterSwitch />
      </Container>
    </Providers>
  );
}

export default App;
