import { BlocksEnum, FieldsEnum } from "./block.model";

export interface BaseUserType {
  id: number;
  login: string;
  firstName?: string;
  lastName?: string;
  email: string;
  activated: boolean;
  langKey?: string;
  authorities: string[];
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
}

export interface UserType {
  id: number;
  block: BlocksEnum;
  field: FieldsEnum;
  user: BaseUserType;
}
