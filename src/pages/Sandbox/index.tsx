import React from "react";
import TextInput from "src/components/Form/TextInput";
import Checkbox from "src/components/Form/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";
import CheckboxWithLabel from "../../components/Form/CheckboxWithLabel";
import Select from "../../components/Form/Select";
import WithLabel from "src/components/Form/WithLabel";
import { Chip } from "@mui/material";


type InputFields = {
  name: string;
  type: string;
  test: boolean;
  withlabel: boolean;
  test1: string;
};

const schema = yup.object().shape({
  name: yup.string().max(5).required(),
  type: yup.string().required(),
  test: yup.bool().oneOf([true], "To pole jest wymagane"),
  withlabel: yup.bool().oneOf([true], "To pole jest wymagane"),
  test1: yup.string().required(),
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
        <button>Submit</button>
        <Select
          name={"test1"}
          control={control}
          options={[
            { label: "Test 1", value: "1" },
            { label: "Test 2", value: "2" },
            { label: "Test 3", value: "3" },
          ]}
        />
        <WithLabel label={"Nazwa"}>
          <Chip label="Czerwony"/>
        </WithLabel>
      </form>
    </div>
  );
};

export default SandboxPage;
