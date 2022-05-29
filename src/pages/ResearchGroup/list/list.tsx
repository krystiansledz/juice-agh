import React, { useState, MouseEvent } from "react";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import { baseUserDefaultValue, UserType } from "../../../models/user.model";
import columns from "./columns";
import { BlocksEnum, FieldsEnum } from "../../../models/block.model";
import { GridCallbackDetails, GridSortModel } from "@mui/x-data-grid";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";

type Props = {
  onRowClick: (
    props: GridRowParams<ResearchGroupType>,
    event: MouseEvent<HTMLElement>
  ) => void;
};

const GroupList: React.FC<Props> = (props) => {
  const { onRowClick } = props;
  const [sortingModel, setSortingModel] = useState<GridSortModel>([]); // for rquery

  const handleSortingChange = (
    model: GridSortModel,
    callback: GridCallbackDetails
  ) => {
    setSortingModel(model);
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sortingMode={"server"}
      onSortModelChange={handleSortingChange} //
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
    />
  );
};

export default GroupList;

const rows: (ResearchGroupType & UserType)[] = [
  {
    id: 1,
    title: "kolo 1",
    user: baseUserDefaultValue,
    field: FieldsEnum.CZERWONY,
    block: BlocksEnum.INFORMATYCZNY,
  },
  {
    id: 2,
    title: "kolo 2",
    user: baseUserDefaultValue,
    field: FieldsEnum.ZIELONY,
    block: BlocksEnum.MATEMATYCZNY,
  },
  {
    id: 3,
    title: "kolo 3",
    user: baseUserDefaultValue,
    field: FieldsEnum.CZARNY,
    block: BlocksEnum.FIZYCZNY,
  },
];
