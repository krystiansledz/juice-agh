import yup from "../../yup";

export type ForgotPasswordFieldValues = {
  email: string;
  password: string;
};

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});
