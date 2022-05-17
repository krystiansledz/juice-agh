import React, { useState, useRef, ChangeEvent } from "react";
import { Control } from "react-hook-form/dist/types/form";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
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

const DatePicker: React.FC<Props> = (props) => {
  const { control, name, label, disabled, maxDate, minDate } = props;
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <MuiDatePicker
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

export default DatePicker;