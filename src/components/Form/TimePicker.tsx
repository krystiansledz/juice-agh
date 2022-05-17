import React from "react";
import { Control } from "react-hook-form/dist/types/form";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type Props = {
  control: Control<any, any>;
  name: string;
  label?: string;
  disabled?: boolean;
};

const TimePicker: React.FC<Props> = (props) => {
  const { control, name, label, disabled } = props;
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <MuiTimePicker
          label={label}
          {...field}
          renderInput={(params) => (
            <TextField
              error={!!error}
              helperText={error?.message}
              disabled={disabled}
              {...params}
            />
          )}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default TimePicker;