import yup from "../../yup";

export type ForgotPasswordFieldValues = {
  email: string;
};

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const formDefaultValues = {
  email: "",
};
