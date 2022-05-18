import { appColors } from "../theme/defaults";

export enum BlocksEnum {
  MATEMATYCZNY = "MATEMATYCZNY",

  FIZYCZNY = "FIZYCZNY",

  INFORMATYCZNY = "INFORMATYCZNY",
}

export enum FieldsEnum {
  ZIELONY = "ZIELONY",

  CZERWONY = "CZERWONY",

  CZARNY = "CZARNY",
}

export const FieldsColors: Record<
  FieldsEnum,
  { color: string; backgroundColor: string }
> = {
  [FieldsEnum.ZIELONY]: {
    color: appColors.white,
    backgroundColor: appColors.primary,
  },
  [FieldsEnum.CZERWONY]: {
    color: appColors.white,
    backgroundColor: appColors.secondary,
  },
  [FieldsEnum.CZARNY]: {
    color: appColors.white,
    backgroundColor: appColors.black,
  },
};
