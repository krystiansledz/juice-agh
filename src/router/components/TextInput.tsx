
import { useForm, useFormState, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Button, TextField} from "@mui/material";
import yup from '../../yup'
import {Controller} from 'react-hook-form'

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    type: yup.string().required(),
  })
  .required();

const TextInput = () => {

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = useFormState({ control });
  // const watchName = useWatch({ control, name: "name" });

  return (
    <form onSubmit={handleSubmit((data) => console.log("123"))}>
      <Controller
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={invalid && isTouched}
          />

        )}
        name="TextField"
        control={control}
        rules={{ required: true }}
      />
    </form>
  );
};

export default TextInput;