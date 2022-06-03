import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { BaseUserType } from "../models/user.model";
import { me } from "./api";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import AppPaths from "../router/appPaths";
import axios from "axios";

type Props = {
  children: JSX.Element;
};

export const useLogout = () => {
  const [, setUser] = React.useContext(AuthContext);
  const [, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  return () => {
    setUser(null);
    setToken(null);
    navigate(AppPaths.Login());
  };
};

export const useIsAuthenticated = () => {
  const [user] = React.useContext(AuthContext);
  return !!user;
};

export const useIsAdmin = (): boolean => {
  const [user] = React.useContext(AuthContext);
  return !!user?.authorities?.includes("ROLE_ADMIN");
};

export const useIsOwner = (id: number | undefined): boolean => {
  const [user] = React.useContext(AuthContext);
  return !!id && id === user?.id;
};

export const useIsActive = () => {
  const [user] = React.useContext(AuthContext);
  return !!user?.activated;
};

export const AuthContext = React.createContext<
  [
    BaseUserType | undefined | null,
    (user: BaseUserType | undefined | null) => void
  ]
>([undefined, (user: BaseUserType | undefined | null) => {}]);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<BaseUserType | null>();
  const [token, setToken] = useLocalStorage("token", null);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      me()
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          setUser(null);
          enqueueSnackbar(error.response.data.detail, {
            variant: "error",
          });
          setToken(null);
        });
    } else {
      setUser(null);
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  if (user === undefined) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
