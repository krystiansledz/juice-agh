import React, { useState, MouseEvent } from "react";
import { EventType } from "../../../models/calendarEvent.model";
import { baseUserDefaultValue, UserType } from "../../../models/user.model";
import columns from "./columns";
import { BlocksEnum, FieldsEnum } from "../../../models/block.model";
import { GridCallbackDetails, GridSortModel } from "@mui/x-data-grid";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";

type Props = {
  onRowClick: (
    props: GridRowParams<EventType>,
    event: MouseEvent<HTMLElement>
  ) => void;
};

const EventList: React.FC<Props> = (props) => {
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
      onSortModelChange={handleSortingChange}
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
    />
  );
};

export default EventList;

const rows: (EventType & UserType)[] = [
  {
    id: 1,
    title: "title 1",
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    publicationDate: new Date().toDateString(),
    description: "description 1",
    link: "asdasd",
    imageUrl: "asdas",
    status: "sdfdsfs",
    user: baseUserDefaultValue,
    field: FieldsEnum.CZERWONY,
    block: BlocksEnum.INFORMATYCZNY,
  },
  {
    id: 2,
    title: "title 2",
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    publicationDate: new Date().toDateString(),
    description: "description 2",
    link: "asdasd",
    imageUrl: "asdas",
    status: "sdfdsfs",
    user: baseUserDefaultValue,
    field: FieldsEnum.ZIELONY,
    block: BlocksEnum.MATEMATYCZNY,
  },
  {
    id: 3,
    title: "title 3",
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    publicationDate: new Date().toDateString(),
    description: "description 3",
    link: "asdasd",
    imageUrl: "asdas",
    status: "sdfdsfs",
    user: baseUserDefaultValue,
    field: FieldsEnum.CZARNY,
    block: BlocksEnum.FIZYCZNY,
  },
];
