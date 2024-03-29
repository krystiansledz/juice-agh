import yup from "../../yup";

export type LoginFieldValues = {
  email: string;
  password: string;
};

export const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const formDefaultValues = {
  email: "",
  password: "",
};
