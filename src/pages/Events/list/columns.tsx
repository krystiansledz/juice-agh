import * as React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip/Chip";
import { FieldsEnum } from "../../../models/block.model";
import { appColors } from "../../../theme/defaults";
import {
  blockValueGridCellRenderer,
  dateValueGridCellRenderer,
  descriptionValueGridCellRenderer,
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
    field: "description",
    headerName: "Opis",
    renderCell: descriptionValueGridCellRenderer,
    flex: 2,
  },
  {
    field: "field",
    headerName: "Obszar",
    renderCell: fieldValueGridCellRenderer,
    flex: 1,
  },
  {
    field: "block",
    headerName: "Blok",
    renderCell: blockValueGridCellRenderer,
    flex: 1,
  },
];

export default columns;
