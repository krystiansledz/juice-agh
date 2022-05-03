import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import { AuthenticatedRoutes, NotAuthenticatedRoutes } from "./appRoutes";

const RouterSwitch: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {NotAuthenticatedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        {AuthenticatedRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AuthenticatedRoute>{route.element}</AuthenticatedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
