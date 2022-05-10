import { Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFieldValues, LoginSchema } from "./form";
import TextInput from "../../components/Form/TextInput";
import { Link as RouterLink } from "react-router-dom";
import AppPaths from "../../router/appPaths";
import PasswordInput from "../../components/Form/PasswordInput";
import { Form } from "../../components/Form/StyledComponents";

type Props = {};

const LoginPage: React.FC<Props> = () => {
  const { handleSubmit, control } = useForm<LoginFieldValues>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFieldValues) => {};

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      direction="column"
      margin="auto"
      maxWidth="sm"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant="h3" align="center">
            Logowanie
          </Typography>
          <TextInput label={"Email"} name={"email"} control={control} />
          <PasswordInput label={"Hasło"} name={"password"} control={control} />
          <Button type="submit" variant="contained">
            Zaloguj się
          </Button>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Button component={RouterLink} to={AppPaths.ForgotPassword()}>
              Nie pamiętasz hasła?
            </Button>
            <Button component={RouterLink} to={AppPaths.Register()}>
              Zarejestruj się
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Grid>
  );
};

export default LoginPage;
