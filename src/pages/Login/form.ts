import yup from "../../yup";

export type LoginFieldValues = {
  email: string;
  password: string;
};

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
