import { appColors } from "../theme/defaults";
import { SelectOption } from "../components/Form/Select";

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

export const BlocksSelectOptions: SelectOption[] = [
  { label: BlocksEnum.MATEMATYCZNY, value: BlocksEnum.MATEMATYCZNY },
  { label: BlocksEnum.FIZYCZNY, value: BlocksEnum.FIZYCZNY },
  {
    label: BlocksEnum.INFORMATYCZNY,
    value: BlocksEnum.INFORMATYCZNY,
  },
];

export const FieldsSelectOptions: SelectOption[] = [
  { label: FieldsEnum.ZIELONY, value: FieldsEnum.ZIELONY },
  { label: FieldsEnum.CZERWONY, value: FieldsEnum.CZERWONY },
  {
    label: FieldsEnum.CZARNY,
    value: FieldsEnum.CZARNY,
  },
];

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
