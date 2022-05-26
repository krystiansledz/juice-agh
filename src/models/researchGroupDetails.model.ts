import { BaseUserType } from "./user.model";
import { BlocksEnum, FieldsEnum } from "./block.model";

export interface ResearchGroupType {
  id: number;
  title: string;
  user: BaseUserType;
  field: FieldsEnum;
  block: BlocksEnum;
}
