import React from "react";
import { Button } from "@mui/material";
import PasswordInput from "../../components/Form/PasswordInput";
import AppPaths from "../../router/appPaths";
import { ChangePasswordFieldValues, ChangePasswordSchema } from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";
import { useParams } from "react-router-dom";

const ChangePasswordPage:React.FC = () => {
  const { uid } = useParams();

  console.log(uid)

  const { handleSubmit, control } = useForm<ChangePasswordFieldValues>({
    resolver: yupResolver(ChangePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordFieldValues) => {};

  const buttonLinks = [{ to: AppPaths.Login(), text: "Zaloguj się" }];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Ustawianie nowego hasła"} buttonLinks={buttonLinks}>
        <PasswordInput label={"Hasło"} name={"newPassword"} control={control} />
        <PasswordInput label={"Powtórz hasło"} name={"confirmPassword"} control={control} />
        <Button type="submit" variant="contained">
          Ustaw hasło
        </Button>
      </Auth>
    </Form>
  );
}

export default ChangePasswordPage;