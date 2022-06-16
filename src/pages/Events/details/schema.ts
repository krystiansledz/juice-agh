import yup from "../../../yup";

export type EventFieldValues = {
  title: string;
  startDate: Date;
  description: string;
  publicationDate: Date;
  link: string;
};

export const EventSchema = yup.object().shape({
  title: yup.string().required(),
  startDate: yup.string().required(),
  description: yup.string().required(),
  publicationDate: yup.string().required(),
  link: yup.string().url().required(),
});

export const defaultValues = {
  title: "",
  startDate: new Date(),
  description: "",
  publicationDate: new Date(),
  link: "",
  imageUrl: "",
  status: "",
};
