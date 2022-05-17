import React from "react";
import { Button } from "@mui/material";
import TextInput from "../../components/Form/TextInput";
import AppPaths from "../../router/appPaths";
import { RegisterFieldValues, RegisterSchema } from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth, { Form } from "../../components/Auth";
import PasswordInput from "../../components/Form/PasswordInput";
import Select from "src/components/Form/Select";


const RegisterPage: React.FC = () => {
  const { handleSubmit, control } = useForm<RegisterFieldValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterFieldValues) => {};

  const buttonLinks = [{ to: AppPaths.Login(), text: "Zaloguj się" }];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Auth title={"Rejestracja"} buttonLinks={buttonLinks}>
        <TextInput label={"Email"} name={"email"} control={control} />
        <PasswordInput label={"Hasło"} name={"password"} control={control} />
        <PasswordInput label={"Powtórz hasło"} name={"password-repeat"} control={control} />
        <Select
          name="block"
          control={control}
          options={[
            { label: "Test 1", value: "1" },
            { label: "Test 2", value: "2" },
          ]}
        />


        <TextInput label={"Nazwa koła"} name={"research-group"} control={control} />
        <TextInput label={"Imie"} name={"first-name"} control={control} />
        <TextInput label={"Nazwisko"} name={"last-name"} control={control} />
        <Button type="submit" variant="contained">
          Zarejestruj się
        </Button>
      </Auth>
    </Form>
  );
};

export default RegisterPage;
