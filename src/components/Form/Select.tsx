import React from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import {
  Select as MuiSelect,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
};

const Select: React.FC<Props> = (props) => {
  const { control, name, label, disabled = false, options } = props;

  const labelId = `${name}-select-label`;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ minWidth: "12.1875rem" }}>
          <InputLabel id={labelId} error={!!error}>
            {label}
          </InputLabel>
          <MuiSelect
            label={label}
            labelId={labelId}
            disabled={disabled}
            error={!!error}
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

export type SelectOption = {
  label: string;
  value: string;
};
