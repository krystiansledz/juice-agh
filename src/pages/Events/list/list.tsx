import React, { MouseEvent } from "react";
import { EventType } from "../../../models/calendarEvent.model";
import columns from "./columns";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";
import { useEvents } from "../api";

type Props = {
  onRowClick: (
    props: GridRowParams<EventType>,
    event: MouseEvent<HTMLElement>
  ) => void;
};

const EventList: React.FC<Props> = (props) => {
  const { onRowClick } = props;

  const events = useEvents();

  return (
    <DataGrid
      loading={events.isLoading}
      rows={events.data ?? []}
      columns={columns}
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
    />
  );
};

export default EventList;
