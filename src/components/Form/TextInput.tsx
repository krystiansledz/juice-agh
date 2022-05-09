import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";
import { Control } from "react-hook-form/dist/types/form";

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  disabled?: boolean;
};

const TextInput: React.FC<Props> = (props) => {
  const { control, name, label, disabled = false } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          error={!!error}
          helperText={error?.message}
          disabled={disabled}
          {...field}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default TextInput;
