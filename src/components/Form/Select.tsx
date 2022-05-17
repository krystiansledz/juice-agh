import React from "react";
import { Controller, useFormState } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import {
  Select as MuiSelect,
  FormControl,
  FormHelperText,
  MenuItem,
} from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  disabled?: boolean;
  options: { label: string; value: string }[];
};

export type SelectOption = {
  label: string;
  value: string;
}

const Select: React.FC<Props> = (props) => {
  const {
    name,
    control,
    disabled = false,
    options,
  } = props;

  const { errors } = useFormState({ control });

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <MuiSelect
            disabled={disabled}
            sx={{
              color:
                errors && !!errors[name]
                  ? (theme) => theme.palette.error.main
                  : "default",
            }}
            {...field}
          >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
          </MuiSelect>
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

export default Select;
