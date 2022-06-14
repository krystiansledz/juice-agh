import React from "react";
import { Button } from "@mui/material";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import {
  ForgotPasswordFieldValues,
  ForgotPasswordSchema,
  formDefaultValues,
} from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";
import { initResetPassword } from "../../auth/api";
import { useSnackbar } from "notistack";

const ForgotPasswordPage: React.FC = () => {
  const { handleSubmit, control } = useForm<ForgotPasswordFieldValues>({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: formDefaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: ForgotPasswordFieldValues) => {
    initResetPassword(data)
      .then((r) => {
        enqueueSnackbar("Wysłano link do resetowania hasła", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data.detail, {
          variant: "error",
        });
      });
  };

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
