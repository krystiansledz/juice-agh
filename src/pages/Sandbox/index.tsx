import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useSnackbar } from "notistack";
import { notificationVariants } from "../../notistack/constants";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

type Props = {};

const SandboxPage: React.FC<Props> = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = useFormState({ control });

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        enqueueSnackbar("Wysłano formularz", {
          variant: notificationVariants.SUCCESS,
        });
      })}
    >
      <TextField {...register("name")} />
      <Button type="submit">Wyślij</Button>
      <Button
        type={"button"}
        onClick={() =>
          enqueueSnackbar("Info snackbar", {
            variant: notificationVariants.INFO,
          })
        }
      >
        Snackbar
      </Button>
    </form>
  );
};

export default SandboxPage;
