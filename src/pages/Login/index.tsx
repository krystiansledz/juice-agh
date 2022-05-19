import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFieldValues, LoginSchema } from "./form";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import PasswordInput from "../../components/Form/PasswordInput";
import Auth, { Form } from "../../components/Auth";

const LoginPage: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFieldValues>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFieldValues) => {};

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
