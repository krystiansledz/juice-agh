import { Button, DialogActions, DialogContent, Stack } from "@mui/material";
import React from "react";
import { EventType } from "../../../models/calendarEvent.model";
import WithLabel from "../../../components/Form/WithLabel";
import { toDdMmYyAndTime } from "../../../utils/dates";
import Link from "@mui/material/Link";

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
          spacing={{
            xs: 2,
            md: 0,
          }}
        >
          <Stack spacing={2}>
            <WithLabel label={"Nazwa"}>{event.title || "-"}</WithLabel>
            <WithLabel label={"Data"}>
              {toDdMmYyAndTime(event.startDate) || "-"}
            </WithLabel>
          </Stack>

          <Stack spacing={2}>
            <WithLabel label={"Opis"}>{event.description || "-"}</WithLabel>
            <WithLabel label={"Link"}>
              {event.link ? (
                <Link href={event.link} target="_blank">
                  {event.link}
                </Link>
              ) : (
                "-"
              )}
            </WithLabel>
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
