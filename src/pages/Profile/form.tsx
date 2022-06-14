import PasswordInput from "../../components/Form/PasswordInput";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePassword } from "./api";
import { useSnackbar } from "notistack";
import {
  ChangePasswordFieldValues,
  ChangePasswordSchema,
  formDefaultValues,
} from "./schema";

const PasswordForm = () => {
  const { handleSubmit, control, reset } = useForm<ChangePasswordFieldValues>({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: formDefaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: ChangePasswordFieldValues) => {
    changePassword(data)
      .then(() => {
        enqueueSnackbar("Hasło zostało zmienione", {
          variant: "success",
        });
        reset();
      })
      .catch((error) => {
        enqueueSnackbar(error.response?.data?.detail, {
          variant: "error",
        });
      });
  };

  return (
    <Box
      sx={{
        width: { xs: "50%", md: "15%" },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} marginTop="2rem" marginBottom="2rem">
          <PasswordInput
            label={"Stare hasło"}
            name={"currentPassword"}
            control={control}
          />
          <PasswordInput
            label={"Nowe hasło"}
            name={"newPassword"}
            control={control}
          />
          <Button type="submit" variant="contained">
            Zmień hasło
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default PasswordForm;
