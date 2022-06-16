import React, { MouseEvent, useEffect, useState } from "react";
import { EventType } from "../../../models/calendarEvent.model";
import columns from "./columns";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";
import { useSearchParams } from "react-router-dom";
import { isFuture } from "date-fns";
import { AuthContext, useIsAdmin, useIsOwner } from "../../../auth/provider";
import { GridCellParams } from "@mui/x-data-grid";

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
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const researchGroup = searchParams.get("researchGroup");
  const myEvents = searchParams.get("myEvents") === "true";
  const isAdmin = useIsAdmin();
  const [user] = React.useContext(AuthContext);

  useEffect(() => {
    if (events) {
      setFilteredEvents(
        events
          .filter(
            (event) => !!event.extraUser // filter events without user (admin created event)
          )
          .filter((event) => event.extraUser?.user.activated)
          .filter(
            (event) =>
              !researchGroup || event.extraUser?.user.login === researchGroup
          )
          .filter(
            (event) =>
              isAdmin || myEvents || !isFuture(new Date(event.publicationDate))
          )
          .filter(
            (event) =>
              !search ||
              event.title.includes(search) ||
              event.description?.includes(search) ||
              event.extraUser?.user?.login?.includes(search)
          )
          .filter(
            (event) => !myEvents || event.extraUser?.user?.id === user?.id
          )
      );
    }
  }, [events, searchParams]);

  const handleCellClick = (
    param: GridCellParams,
    event: React.MouseEvent<HTMLElement>
  ) => {
    param.field === "link" && event.stopPropagation();
  };

  return (
    <DataGrid
      loading={isLoading}
      rows={filteredEvents}
      columns={columns}
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
      hideFooterPagination={true}
      onCellClick={handleCellClick}
    />
  );
};

export default EventList;
