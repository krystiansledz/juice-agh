import React from "react";
import TextInput from "src/components/Form/TextInput";
import Checkbox from "src/components/Form/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";
import CheckboxWithLabel from "../../components/Form/CheckboxWithLabel";
import Select, { SelectOption } from "../../components/Form/Select";

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

const options: SelectOption[] = [
  { label: "option 1", value: "1" },
  { label: "option 2", value: "2" },
  { label: "option 3", value: "3" },
];

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
        <Select
          name={"test1"}
          control={control}
          label={"test1"}
          options={options}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SandboxPage;
