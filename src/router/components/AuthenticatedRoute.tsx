import React from "react";
import { Navigate, RouteProps, useLocation } from "react-router";
import AppPaths from "../appPaths";
import Layout from "../../pages/Layout";
import { useIsAuthenticated } from "../../auth/provider";

interface Props extends RouteProps {
  children: JSX.Element;
}

const AuthenticatedRoute: React.FC<Props> = ({ children, ...rest }) => {
  const location = useLocation();

  const isAuthenticated = useIsAuthenticated();

  // auto redirect to /login?next=*
  if (!isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: AppPaths.Login(),
          search: `?next=${location.pathname}${
            location.search.length > 1 ? location.search : ""
          }`,
        }}
        replace
      />
    );
  }

  return <Layout>{children}</Layout>;
};

export default AuthenticatedRoute;
