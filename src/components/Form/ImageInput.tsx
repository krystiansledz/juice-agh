import React, { useRef, ChangeEvent } from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import { Button, FormControl, FormHelperText } from "@mui/material";

type Props = {
  control: Control<any>;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  alt?: string;
  src?: string;
  disabled?: boolean;
  height?: string;
  width?: string;
  setValue: any;
};

const ImageInput: React.FC<Props> = (props) => {
  const {
    name,
    control,
    disabled,
    setValue,
  } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      console.log(files[0]);
      // TODO: request postMedia().then(...
      setValue(name, files[0]);
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <input
            ref={inputRef}
            accept="image/*"
            type="file"
            hidden
            onChange={onChange}
          />
          <Button
            disabled={disabled}
            onClick={handleClick}
          >
            Upload
          </Button>
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