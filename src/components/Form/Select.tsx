import React from "react";
import { Controller } from "react-hook-form";
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
  defaultValue?: string;
  disabled?: boolean;
  values: { label: string; value: string }[];
};

const Select: React.FC<Props> = (props) => {
  const {
    name,
    control,
    defaultValue,
    disabled = false,
    values: options,
  } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <MuiSelect
            disabled={disabled}
            defaultValue={defaultValue}
            sx={{
              color: !!error ? (theme) => theme.palette.error.main : "white",
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
