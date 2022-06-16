import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";
import {
  blockValueGridCellRenderer,
  dateValueGridCellRenderer,
  linkValueGridCellRenderer,
  researchGroupValueGridCellRenderer,
  fieldValueGridCellRenderer,
  titleValueGridCellRenderer,
} from "./renderers";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Tytuł",
    renderCell: titleValueGridCellRenderer,
    flex: 2,
  },
  {
    field: "startDate",
    headerName: "Data",
    renderCell: dateValueGridCellRenderer,
    flex: 1,
  },
  {
    field: "link",
    headerName: "Link",
    renderCell: linkValueGridCellRenderer,
    flex: 1,
  },
  {
    field: "researchGroup",
    headerName: "Koło",
    renderCell: researchGroupValueGridCellRenderer,
    valueGetter: (params) => params.row.extraUser.user?.login,
    flex: 1,
  },
  {
    field: "field",
    headerName: "Obszar",
    renderCell: fieldValueGridCellRenderer,
    valueGetter: (params) => params.row.extraUser.field,
    flex: 1,
  },
  {
    field: "block",
    headerName: "Blok",
    renderCell: blockValueGridCellRenderer,
    valueGetter: (params) => params.row.extraUser.block,
    flex: 1,
  },
];

export default columns;
