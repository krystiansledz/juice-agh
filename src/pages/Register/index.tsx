import React from "react";
import { Button } from "@mui/material";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import {
  formDefaultValues,
  RegisterFieldValues,
  RegisterSchema,
} from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";
import PasswordInput from "../../components/Form/PasswordInput";
import Select from "src/components/Form/Select";
import {
  FieldsSelectOptions,
  BlocksSelectOptions,
} from "src/models/block.model";
import { register } from "../../auth/api";
import { useSnackbar } from "notistack";

const RegisterPage: React.FC = () => {
  const { handleSubmit, control } = useForm<RegisterFieldValues>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: formDefaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: RegisterFieldValues) => {
    register(data)
      .then((response) => {
        enqueueSnackbar("Zarejestrowano pomyślnie", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error?.response?.data?.detail, {
          variant: "error",
        });
      });
  };

  const buttonLinks = [{ to: AppPaths.Login(), text: "Zaloguj się" }];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Rejestracja"} buttonLinks={buttonLinks}>
        <TextInput label={"Email"} name={"email"} control={control} />
        <PasswordInput label={"Hasło"} name={"password"} control={control} />
        <PasswordInput
          label={"Powtórz hasło"}
          name={"passwordConfirm"}
          control={control}
        />
        <Select
          label="Obszar"
          name="field"
          control={control}
          options={FieldsSelectOptions}
        />
        <Select
          label="Blok"
          name="block"
          control={control}
          options={BlocksSelectOptions}
        />
        <TextInput label={"Nazwa koła"} name="login" control={control} />
        <TextInput label={"Imie"} name={"firstName"} control={control} />
        <TextInput label={"Nazwisko"} name={"lastName"} control={control} />
        <Button type="submit" variant="contained">
          Zarejestruj się
        </Button>
      </Auth>
    </Form>
  );
};

export default RegisterPage;
