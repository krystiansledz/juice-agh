import React from "react";
import { Button } from "@mui/material";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import { ForgotPasswordFieldValues, ForgotPasswordSchema } from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";

const ForgotPasswordPage: React.FC = () => {
  const { handleSubmit, control } = useForm<ForgotPasswordFieldValues>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFieldValues) => {};

  const buttonLinks = [{ to: AppPaths.Login(), text: "Zaloguj się" }];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Resetowanie hasła"} buttonLinks={buttonLinks}>
        <TextInput label={"Email"} name={"email"} control={control} />
        <Button type="submit" variant="contained">
          Zresetuj hasło
        </Button>
      </Auth>
    </Form>
  );
};

export default ForgotPasswordPage;
