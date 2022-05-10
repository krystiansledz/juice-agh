import React, { useState } from "react";
import { Control } from "react-hook-form/dist/types/form";
import TextInput from "./TextInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  disabled?: boolean;
};

const PasswordInput: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextInput
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={toggleVisibility} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};

export default PasswordInput;
