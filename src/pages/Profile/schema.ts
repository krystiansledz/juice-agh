import yup from "../../yup";

export type ChangePasswordFieldValues = {
  currentPassword: string;
  newPassword: string;
};
export const ChangePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required(),
  newPassword: yup.string().required(),
});
export const formDefaultValues = {
  currentPassword: "",
  newPassword: "",
};