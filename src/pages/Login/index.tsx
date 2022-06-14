import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDefaultValues, LoginFieldValues, LoginSchema } from "./schema";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import PasswordInput from "../../components/Form/PasswordInput";
import Auth, { Form } from "../../components/Auth";
import { useSnackbar } from "notistack";
import { loginUser } from "../../auth/api";
import { useLocalStorage } from "usehooks-ts";
import useNextLocation from "./useNextLocation";

const LoginPage: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFieldValues>({
    resolver: yupResolver(LoginSchema),
    defaultValues: formDefaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();
  const [, setToken] = useLocalStorage("token", null);
  useNextLocation();

  const onSubmit = (data: LoginFieldValues) => {
    loginUser(data)
      .then((response) => {
        setToken(response.data.id_token);
      })
      .catch((error) => {
        enqueueSnackbar(error.response?.data?.detail, {
          variant: "error",
        });
      });
  };

  const buttonLinks = [
    { to: AppPaths.ForgotPassword(), text: "Nie pamiętasz hasła?" },
    { to: AppPaths.Register(), text: "Zarejestruj się" },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Logowanie"} buttonLinks={buttonLinks}>
        <TextInput label={"Email"} name={"email"} control={control} />
        <PasswordInput label={"Hasło"} name={"password"} control={control} />
        <Button type="submit" variant="contained">
          Zaloguj się
        </Button>
      </Auth>
    </Form>
  );
};

export default LoginPage;
