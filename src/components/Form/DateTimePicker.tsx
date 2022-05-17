import React from "react";
import { Control } from "react-hook-form/dist/types/form";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type Props = {
  control: Control<any, any>;
  name: string;
  label?: string;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
};

const DateTimePicker: React.FC<Props> = (props) => {
  const { control, name, label, disabled, maxDate, minDate } = props;
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <MuiDateTimePicker
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

export default DateTimePicker;