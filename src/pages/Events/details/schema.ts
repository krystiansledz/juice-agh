import yup from "../../../yup";

export type EventFieldValues = {
  title: string;
  startDate: string;
  description: string;
  publicationDate: string;
  link: string;
};

export const EventSchema = yup.object().shape({
  title: yup.string().required(),
  startDate: yup.string().required(),
  description: yup.string().required(),
  publicationDate: yup.string().required(),
  link: yup.string().required(),
});

export const defaultValues = {
  title: "",
  endDate: new Date().toISOString(),
  startDate: new Date().toISOString(),
  description: "",
  publicationDate: new Date().toISOString(),
  link: "",

  imageUrl: "",
  status: "",
};
