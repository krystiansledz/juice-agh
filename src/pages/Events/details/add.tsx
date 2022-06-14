import Form from "./form";
import { FormMode } from "./index";
import React from "react";

type Props = {
  onClose: () => void;
};

const AddForm: React.FC<Props> = (props) => {
  const { onClose } = props;

  return <Form onClose={onClose} formMode={FormMode.CREATE} />;
};

export default AddForm;
