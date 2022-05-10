import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import TextInput from "../../components/Form/TextInput";
import { Link as RouterLink } from "react-router-dom";
import AppPaths from "../../router/appPaths";
import { Form } from "../../components/Form/StyledComponents";
import { ForgotPasswordFieldValues, ForgotPasswordSchema } from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

const ForgotPasswordPage: React.FC<Props> = () => {
  const { handleSubmit, control } = useForm<ForgotPasswordFieldValues>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFieldValues) => {};

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
            Resetowanie hasła
          </Typography>
          <TextInput label={"Email"} name={"email"} control={control} />
          <Button type="submit" variant="contained">
            Zresetuj hasło
          </Button>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button component={RouterLink} to={AppPaths.Login()}>
              Zaloguj się
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Grid>
  );
};

export default ForgotPasswordPage;
