import React from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import { Button as MuiButton, FormControl } from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  type: any;
  label: string;
  variant?: any;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  const {
    name,
    type,
    control,
    label,
    variant,
    disabled = false,
    startIcon,
    endIcon
  } = props;

  return (
    <Controller
      render={({ field }) => (
        <FormControl>
          <MuiButton
            type={type}
            variant={variant}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            {...field}
          >
            {label}
          </MuiButton>
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default Button;
