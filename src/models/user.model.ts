import { BlocksEnum, FieldsEnum } from "./block.model";

export interface BaseUserType {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activated?: boolean;
  langKey?: string;
  authorities?: any[];
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
  password?: string;
}

export const baseUserDefaultValue: Readonly<BaseUserType> = {
  id: "",
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
  password: "",
};

export interface UserType {
  id?: number;
  block?: BlocksEnum | null;
  field?: FieldsEnum | null;
  user?: BaseUserType | null;
}

export const userDefaultValue: Readonly<UserType> = {};
