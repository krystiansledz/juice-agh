import React, { MouseEvent, useEffect, useState } from "react";
import { EventType } from "../../../models/calendarEvent.model";
import columns from "./columns";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";
import { useEvents } from "../api";

type Props = {
  events: EventType[] | undefined;
  isLoading: boolean;
  onRowClick: (
    props: GridRowParams<EventType>,
    event: MouseEvent<HTMLElement>
  ) => void;
};

const EventList: React.FC<Props> = (props) => {
  const { onRowClick, events, isLoading } = props;
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(
    events || []
  );

  useEffect(() => {
    if (events) {
      setFilteredEvents(
        events.filter((event) => {
          return !!event.extraUser; // filter events without user (admin created event)
        })
      );
    }
  }, [events]);

  return (
    <DataGrid
      loading={isLoading}
      rows={filteredEvents}
      columns={columns}
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
    />
  );
};

export default EventList;
