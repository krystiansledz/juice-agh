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

export const baseUserDefaultValue: Readonly<BaseUserType> = {
  id: 0,
  login: "",
  firstName: "",
  lastName: "",
  email: "",
  activated: true,
  langKey: "",
  authorities: [],
  createdBy: "",
  createdDate: null,
  lastModifiedBy: "",
  lastModifiedDate: null,
};

export interface UserType {
  id: number;
  block?: BlocksEnum | null;
  field?: FieldsEnum | null;
  user: BaseUserType;
}
