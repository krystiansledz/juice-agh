import axios from "axios";
import { ChangePasswordFieldValues } from "./form";

export const changePassword = (data: ChangePasswordFieldValues) =>
  axios.post(
    `${process.env.REACT_APP_API_HOST}/api/account/change-password`,
    data
  );
