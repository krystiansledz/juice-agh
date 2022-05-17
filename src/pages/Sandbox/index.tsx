import React, { ChangeEvent } from "react";
import TextInput from "src/components/Form/TextInput";
import Checkbox from "src/components/Form/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../yup";
import CheckboxWithLabel from "../../components/Form/CheckboxWithLabel";
import ImageInput from "../../components/Form/ImageInput";

type InputFields = {
  name: string;
  type: string;
  test: boolean;
  withlabel: boolean;
  test2: boolean;
};

const schema = yup.object().shape({
  name: yup.string().max(5).required(),
  type: yup.string().required(),
  test: yup.bool().oneOf([true], "To pole jest wymagane"),
  withlabel: yup.bool().oneOf([true], "To pole jest wymagane"),
});

type Props = {};

const SandboxPage: React.FC<Props> = () => {
  const { handleSubmit, control, setValue } = useForm<InputFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      test: false,
      withlabel: false,
    },
  });

  const [fileSelected, setFileSelected] = React.useState<File>();

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFileSelected(files[0]);
    }
  };

  const imagePreview = fileSelected ? URL.createObjectURL(fileSelected) : "";

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
        <ImageInput
          name={"test2"}
          control={control}
          src={imagePreview}
          alt={"test"}
          onChange={handleSetImage}
          height={"100px"}
          width={"100px"}
          disabled={false}
          setValue={setValue}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SandboxPage;
