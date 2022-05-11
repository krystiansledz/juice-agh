import yup from "../../yup";

export type RegisterFieldValues = {
  email: string;
  password: string;
};

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
