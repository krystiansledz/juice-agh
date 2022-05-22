import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import EventDetailModal from "./form";
import { Control, useForm } from "react-hook-form";
type Props = {
  eventId: number;
  open: boolean;
  onClose: () => void;
  title: string;
};

const EventDetail: React.FC<Props> = (props) => {
  const {title, eventId, open, onClose } = props;

  const FORM_MODE = eventId === 0 ? FormMode.CREATE : FormMode.EDIT;

  const { handleSubmit, control } = useForm({});

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth={true}>
      <EventDetailModal
        control={control}
        onSubmit={handleSubmit}
        open={true}
        onClose={onClose}
        title={title}
        eventId={eventId}
        formMode={FormMode.READ}
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
