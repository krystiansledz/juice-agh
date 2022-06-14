import { UserType } from "./user.model";

export interface EventType {
  id: number;
  title: string;
  startDate: string;
  endDate?: string | null;
  publicationDate?: string;
  description?: string;
  link?: string;
  imageUrl?: string | null;
  status?: string | null;
  extraUser: UserType | null;
}
