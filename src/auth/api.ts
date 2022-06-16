import axios from "axios";
import { LoginFieldValues } from "../pages/Login/schema";
import { RegisterFieldValues } from "../pages/Register/schema";
import { ForgotPasswordFieldValues } from "../pages/ForgotPassword/schema";

export const me = () =>
  axios.get(`${process.env.REACT_APP_API_HOST}/api/account`);

export const extraMe = () =>
  axios
    .get(`${process.env.REACT_APP_API_HOST}/api/extra-users/current`)
    .then((result) => result.data);

export const loginUser = (data: LoginFieldValues) =>
  axios.post(`${process.env.REACT_APP_API_HOST}/api/authenticate`, {
    username: data.email,
    password: data.password,
  });

export const register = (data: RegisterFieldValues) =>
  axios.post(`${process.env.REACT_APP_API_HOST}/api/register`, {
    block: data.block,
    email: data.email,
    field: data.field,
    login: data.login,
    password: data.password,
    langKey: "en",
    firstName: data.firstName,
    lastName: data.lastName,
  });

export const initResetPassword = (data: ForgotPasswordFieldValues) =>
  axios.post(
    `${process.env.REACT_APP_API_HOST}/api/account/reset-password/init`,
    data.email,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

export const finishResetPassword = (data: {
  newPassword: string;
  uid: string;
}) =>
  axios.post(
    `${process.env.REACT_APP_API_HOST}/api/account/reset-password/finish`,
    {
      key: data.uid,
      newPassword: data.newPassword,
    }
  );
