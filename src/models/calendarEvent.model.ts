import { BaseUserType } from "./user.model";
import { BlocksEnum, FieldsEnum } from "./block.model";

export interface EventType {
  id: number;
  title: string;
  startDate: string;
  endDate?: string | null;
  publicationDate?: string | null;
  description?: string | null;
  link?: string | null;
  imageUrl?: string | null;
  status?: string | null;
  user: BaseUserType;
  field: FieldsEnum;
  block: BlocksEnum;
}
