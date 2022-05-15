import React, { ChangeEvent } from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import {
  Button as MuiButton,
  FormControl,
  FormHelperText,
} from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  alt?: string;
  src?: string;
  disabled?: boolean;
  height?: string;
  width?: string;
};

const ImageInput: React.FC<Props> = (props) => {
  const {
    name,
    control,
    onChange,
    alt,
    src,
    disabled = false,
    height,
    width,
  } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            style={{ alignItems: "center" }}
          ></img>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            {...field}
            onChange={disabled ? undefined : onChange} // TODO: Fix this
          />
          <label htmlFor="raised-button-file">
            <MuiButton component="span" disabled={disabled}>
              Upload
            </MuiButton>
          </label>
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

export default ImageInput;
