import AppPaths from "./appPaths";
import { Navigate } from "react-router-dom";
import EventsPage from "../pages/Events/list";
import ProfilePage from "../pages/Profile";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ForgotPasswordPage from "../pages/ForgotPassword";
import ChangePasswordPage from "../pages/ChangePassword";
import SandboxPage from "../pages/Sandbox";

export const NotAuthenticatedRoutes = [
  {
    path: AppPaths.Sandbox(),
    element: <SandboxPage />,
  },
  {
    path: AppPaths.Login(),
    element: <LoginPage />,
  },
  {
    path: AppPaths.Register(),
    element: <RegisterPage />,
  },
  {
    path: AppPaths.ForgotPassword(),
    element: <ForgotPasswordPage />,
  },
  {
    path: AppPaths.ChangePassword(":uid"),
    element: <ChangePasswordPage />,
  },
];

export const AuthenticatedRoutes = [
  {
    path: AppPaths.BaseUrl(),
    element: <Navigate to={AppPaths.Events()} replace />,
  },
  {
    path: AppPaths.Events(),
    element: <EventsPage />,
  },
  {
    path: AppPaths.Profile(),
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <Navigate to={AppPaths.Events()} replace />,
  },
];
