import React, { useState, MouseEvent, useEffect } from "react";
import EventList from "./list";
import styled from "styled-components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EventDetail from "../details";
import { GridRowParams } from "@mui/x-data-grid";
import { EventType } from "../../../models/calendarEvent.model";
import { useIsActive, useIsAdmin } from "../../../auth/provider";
import { useEvents } from "../api";
import Filters from "./filters";
import { Stack } from "@mui/material";

const EventsPage: React.FC = () => {
  const [eventId, setEventId] = useState<number>();

  const events = useEvents();

  const isDetailOpen = eventId !== undefined;
  const isActive = useIsActive();
  const isAdmin = useIsAdmin();

  useEffect(() => {
    if (!isDetailOpen) {
      events.refetch();
    }
  }, [isDetailOpen]);

  const handleOpenDetail = (id: number) => {
    setEventId(id);
  };

  const handleCloseDetail = () => {
    setEventId(undefined);
  };

  const handleRowClick = (
    params: GridRowParams<EventType>,
    event: MouseEvent<HTMLElement>
  ) => {
    if (params.row.id !== null) handleOpenDetail(params.row.id);
    event.preventDefault();
  };

  return (
    <>
      {eventId !== undefined && (
        <EventDetail
          eventId={eventId as number}
          open={isDetailOpen}
          onClose={handleCloseDetail}
        />
      )}
      <ListContainer>
        <ListHeader
          sx={{
            gap: "1rem",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Filters />
          {isActive && !isAdmin && (
            <Button
              color="secondary"
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => handleOpenDetail(0)}
            >
              Dodaj wydarzenie
            </Button>
          )}
        </ListHeader>
        <EventList
          onRowClick={handleRowClick}
          events={events.data}
          isLoading={events.isLoading}
        />
      </ListContainer>
    </>
  );
};

export default EventsPage;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
`;

const ListHeader = styled(Stack)`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
