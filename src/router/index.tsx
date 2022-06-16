import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import {
  AdminRoutes,
  AuthenticatedRoutes,
  NotAuthenticatedRoutes,
} from "./appRoutes";
import PublicLayout from "../pages/PublicLayout";

const RouterSwitch: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {NotAuthenticatedRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicLayout>{route.element}</PublicLayout>}
          />
        ))}

        {AdminRoutes.map((route) => (
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
