import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

type Props = {};

const SandboxPage: React.FC<Props> = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = useFormState({ control });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register("name")} />
      <input type="number" {...register("age")} />
      <input type="submit" />
    </form>
  );
};

export default SandboxPage;
