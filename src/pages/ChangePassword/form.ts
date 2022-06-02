import yup from "../../yup";

export type ChangePasswordFieldValues = {
  newPassword: string;
  confirmPassword: string;
};

export const ChangePasswordSchema = yup.object().shape({
  newPassword: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("newPassword"), null],
      "Wprowadzone hasła nie są jednakowe"
    ),
});

export const formDefaultValues = {
  newPassword: "",
  confirmPassword: "",
};
