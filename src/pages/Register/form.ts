import yup from "../../yup";

export type RegisterFieldValues = {
  email: string;
  password: string;
  confirmPassword: string;
  block: string;
  field: string;
  firstName: string;
  lastName: string;
};

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
  block: yup.string().required(),
  field: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});
