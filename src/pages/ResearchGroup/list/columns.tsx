import { GridColDef } from "@mui/x-data-grid";
import {
  blockValueGridCellRenderer,
  fieldValueGridCellRenderer,
  titleValueGridCellRenderer,
} from "./renderers";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Nazwa koła",
    renderCell: titleValueGridCellRenderer,
    flex: 5,
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
