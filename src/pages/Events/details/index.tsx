import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import EditForm from "./form";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@mui/material";
import { useEvent } from "../api";

type Props = {
  eventId: number;
  open: boolean;
  onClose: () => void;
};

const EventDetail: React.FC<Props> = (props) => {
  const { eventId, open, onClose } = props;

  const event = useEvent(eventId);

  const FORM_MODE = eventId === 0 ? FormMode.CREATE : FormMode.EDIT;

  const { handleSubmit, control } = useForm({});

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle align="center" width="1">
        Wydarzenie
      </DialogTitle>
      <EditForm
        control={control}
        onSubmit={handleSubmit}
        onClose={onClose}
        formMode={FORM_MODE}
        event={event.data}
      />
    </Dialog>
  );
};

export default EventDetail;

export enum FormMode {
  READ = "READ",
  CREATE = "CREATE",
  EDIT = "EDIT",
}
