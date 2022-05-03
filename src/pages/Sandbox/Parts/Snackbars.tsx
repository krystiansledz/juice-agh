import { useForm, useFormState, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { notificationVariants } from "../../../notistack/constants";
import _ from "lodash";
import { useSnackbar } from "notistack";
import { Button, TextField } from "@mui/material";
import yup from "../../../yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

const Snackbars = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = useFormState({ control });
  const watchName = useWatch({ control, name: "name" });

  useEffect(() => {
    enqueueSnackbar("Zmieniono input 'name'", {
      variant: notificationVariants.DEFAULT,
    });
  }, [watchName]);

  useEffect(() => {
    if (!_.isEmpty(errors)) {
      enqueueSnackbar("Wypełnij poprawnie formularz", {
        variant: notificationVariants.ERROR,
      });
    }
  }, [errors]);

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

export default Snackbars;
