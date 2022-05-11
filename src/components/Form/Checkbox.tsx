import React from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormHelperText,
} from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
};

const Checkbox: React.FC<Props> = (props) => {
  const { name, control } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <MuiCheckbox
            sx={{
              color: !!error ? (theme) => theme.palette.error.main : "default",
            }}
            {...field}
          />
          {error && (
            <FormHelperText error={!!error}>{error.message}</FormHelperText>
          )}
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default Checkbox;
