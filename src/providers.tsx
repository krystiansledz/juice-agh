import React from "react";
import ThemeProvider from "./theme/provider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pl } from "date-fns/locale";
import NotistackProvider from "./notistack/provider";
import AuthProvider from "./auth/provider";
import QueryProvider from "./rquery/provider";

type Props = {
  children: JSX.Element;
};

const Providers: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <NotistackProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </LocalizationProvider>
      </NotistackProvider>
    </ThemeProvider>
  );
};

export default Providers;
