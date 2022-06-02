import React from "react";
import { Button } from "@mui/material";
import PasswordInput from "../../components/Form/PasswordInput";
import AppPaths from "../../router/appPaths";
import {
  ChangePasswordFieldValues,
  ChangePasswordSchema,
  formDefaultValues,
} from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";
import { useNavigate, useParams } from "react-router-dom";
import { finishResetPassword } from "../../auth/api";
import { useSnackbar } from "notistack";

const ChangePasswordPage: React.FC = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = useForm<ChangePasswordFieldValues>({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: formDefaultValues,
  });

  if (!uid) {
    navigate(AppPaths.Login());
    return null;
  }

  const onSubmit = (data: ChangePasswordFieldValues) => {
    finishResetPassword({ newPassword: data.newPassword, uid: uid })
      .then(() => {
        enqueueSnackbar("Hasło zostało zmienione", { variant: "success" });
        navigate(AppPaths.Login());
      })
      .catch((error) => {
        enqueueSnackbar(error.response?.data?.detail, { variant: "error" });
      });
  };

  const buttonLinks = [{ to: AppPaths.Login(), text: "Zaloguj się" }];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Ustawianie nowego hasła"} buttonLinks={buttonLinks}>
        <PasswordInput label={"Hasło"} name={"newPassword"} control={control} />
        <PasswordInput
          label={"Powtórz hasło"}
          name={"confirmPassword"}
          control={control}
        />
        <Button type="submit" variant="contained">
          Ustaw hasło
        </Button>
      </Auth>
    </Form>
  );
};

export default ChangePasswordPage;
