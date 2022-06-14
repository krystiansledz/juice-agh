import yup from "../../yup";

export type RegisterFieldValues = {
  email: string;
  password: string;
  confirmPassword: string;
  block: string;
  field: string;
  firstName: string;
  lastName: string;
  login: string;
};

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
  block: yup.string().required(),
  field: yup.string().required(),
  login: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export const formDefaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  block: "",
  field: "",
  firstName: "",
  lastName: "",
  login: "",
};
