import React from "react";
import ThemeProvider from "./theme/provider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pl } from "date-fns/locale";

type Props = {
  children: JSX.Element;
};

const Providers: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Providers;
