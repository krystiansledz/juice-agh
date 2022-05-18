import { DataGrid as MuiDataGrid, DataGridProps } from "@mui/x-data-grid";
import React from "react";
import styled from "styled-components";
import { appColors } from "../../theme/defaults";

const DataGrid: React.FC<DataGridProps> = (props) => {
  return <StyledDataGrid {...props} />;
};

export default DataGrid;

const StyledDataGrid = styled(MuiDataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-cell {
    &:focus,
    &:active,
    &:read-only {
      outline: none;
    }
  }

  .MuiDataGrid-columnHeaders {
    background-color: ${appColors.black};
    color: ${appColors.white};
  }

  .MuiDataGrid-columnSeparator {
    visibility: hidden;
  }

  &.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle {
    text-transform: uppercase;
    font-size: 0.8125rem;
    font-weight: 700;
  }

  .MuiDataGrid-row {
    &:nth-child(even) {
      background-color: ${(props) => props.theme.palette.opaque[50]};
    }
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.palette.opaque[100]};
    }
  }
`;
