import { GridColDef } from "@mui/x-data-grid";
import {
  blockValueGridCellRenderer,
  fieldValueGridCellRenderer,
  titleValueGridCellRenderer,
  activeValueGridCellRenderer,
} from "./renderers";
import { useEffect, useState } from "react";
import { useIsAdmin } from "../../../auth/provider";

const useColumns = (): GridColDef[] => {
  const [columns, setColumns] = useState<GridColDef[]>(defaultColumns);

  const isAdmin = useIsAdmin();

  useEffect(() => {
    if (isAdmin) {
      setColumns([
        ...defaultColumns,
        {
          field: "active",
          headerName: "Aktywny",
          valueGetter: (params) => params.row.user?.activated,
          renderCell: activeValueGridCellRenderer,
          sortable: false,
          flex: 1,
        },
      ]);
    }
  }, []);

  return columns;
};

const defaultColumns: GridColDef[] = [
  {
    field: "title",
    headerName: "Nazwa koła",
    valueGetter: (params) => params.row.user?.login,
    renderCell: titleValueGridCellRenderer,
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

export default useColumns;
