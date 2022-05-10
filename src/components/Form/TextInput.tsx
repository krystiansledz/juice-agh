import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";
import { Control } from "react-hook-form/dist/types/form";

type Props = {
  control: Control<any>;
  type?: string;
  name: string;
  label?: string;
  disabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const TextInput: React.FC<Props> = (props) => {
  const {
    control,
    type = "text",
    name,
    label,
    disabled = false,
    startAdornment,
    endAdornment,
  } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          type={type}
          label={label}
          error={!!error}
          helperText={error?.message}
          disabled={disabled}
          InputProps={{
            startAdornment,
            endAdornment,
          }}
          {...field}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default TextInput;
