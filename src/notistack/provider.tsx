import React from "react";
import { SnackbarProvider } from "notistack";
import Grow from "@mui/material/Grow";

type Props = {
  children: JSX.Element;
};

const NotistackProvider: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
      TransitionComponent={Grow as React.ComponentType}
      preventDuplicate
    >
      {children}
    </SnackbarProvider>
  );
};

export default NotistackProvider;
