import React from "react";
import TextInput from "src/components/Form/TextInput";
import Checkbox from "src/components/Form/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";
import CheckboxWithLabel from "../../components/Form/CheckboxWithLabel";
import Button from "../../components/Form/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";

type InputFields = {
  name: string;
  type: string;
  test: boolean;
  withlabel: boolean;
};

const schema = yup.object().shape({
  name: yup.string().max(5).required(),
  type: yup.string().required(),
  test: yup.bool().oneOf([true], "To pole jest wymagane"),
  withlabel: yup.bool().oneOf([true], "To pole jest wymagane"),
});

type Props = {};

const SandboxPage: React.FC<Props> = () => {
  const { handleSubmit, control } = useForm<InputFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      test: false,
      withlabel: false,
    },
  });

  const onSubmit = (data: any) => {
    // TODO: Connect with API
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name={"name"}
          label={"name"}
          // disabled={true}
          control={control}
        />
        <TextInput name={"type"} label={"type"} control={control} />
        <Checkbox name={"test"} control={control} />
        <CheckboxWithLabel
          name={"withlabel"}
          label={"test"}
          control={control}
        />
        <Button
          name={"names"}
          type={"submit"}
          variant={"outlined"}
          label={"Sprawdź"}
          startIcon={<DeleteIcon />}
          endIcon={<AlarmIcon />}
          control={control}
        />
      </form>
    </div>
  );
};

export default SandboxPage;
