import React from "react";
import { useFormState } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import { FormControlLabel } from "@mui/material";
import Checkbox from "./Checkbox";

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  disabled?: boolean;
};

const CheckboxWithLabel: React.FC<Props> = (props) => {
  const { label, control, name, disabled } = props;
  const { errors } = useFormState({ control });

  return (
    <FormControlLabel
      control={<Checkbox {...props} />}
      label={label}
      disabled={disabled}
      sx={{
        color:
          errors && !!errors[name]
            ? (theme) => theme.palette.error.main
            : "default",
      }}
    />
  );
};

export default CheckboxWithLabel;
