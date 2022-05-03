import React from "react";
import RouterSwitch from "./router";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <RouterSwitch />
    </Providers>
  );
}

export default App;
