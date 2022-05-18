import { GridValueFormatterParams } from "@mui/x-data-grid";

import { toDdMmYyyy, toDdMmYyyyAndTime } from "../../utils/dates";

export const dateValueFormatter = (params: GridValueFormatterParams) =>
  toDdMmYyyy(`${params.value}`);

export const dateTimeValueFormatter = (params: GridValueFormatterParams) =>
  toDdMmYyyyAndTime(`${params.value}`);
