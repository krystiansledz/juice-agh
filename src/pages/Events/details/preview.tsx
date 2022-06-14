import { Button, DialogActions, DialogContent, Stack } from "@mui/material";
import React from "react";
import { EventType } from "../../../models/calendarEvent.model";
import WithLabel from "../../../components/Form/WithLabel";

type Props = {
  event: EventType;
  onClose: () => void;
};

const PreviewEventDetailModal: React.FC<Props> = (props) => {
  const { event, onClose } = props;

  return (
    <>
      <DialogContent>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "space-evenly",
            padding: "1rem 0",
          }}
        >
          <Stack spacing={2}>
            <WithLabel label={"Nazwa"}>{event.title}</WithLabel>
            <WithLabel label={"Data"}>{event.startDate}</WithLabel>
          </Stack>

          <Stack spacing={2}>
            <WithLabel label={"Opis"}>{event.description}</WithLabel>
            <WithLabel label={"Link"}>{event.link}</WithLabel>
          </Stack>
        </Stack>
        <DialogActions
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "0.5rem" },
          }}
        >
          <Button variant="contained" onClick={onClose}>
            Zamknij
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default PreviewEventDetailModal;
