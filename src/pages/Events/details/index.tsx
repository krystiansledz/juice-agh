import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import { DialogTitle } from "@mui/material";
import AddForm from "./add";
import EditOrPreviewForm from "./editOrPreview";

type Props = {
  eventId: number;
  open: boolean;
  onClose: () => void;
};

const EventDetail: React.FC<Props> = (props) => {
  const { eventId, open, onClose } = props;

  const FORM_MODE = eventId === 0 ? FormMode.CREATE : undefined;

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle align="center" width="1">
        Wydarzenie
      </DialogTitle>
      <>
        {FORM_MODE === FormMode.CREATE && <AddForm onClose={onClose} />}
        {FORM_MODE === undefined && (
          <EditOrPreviewForm onClose={onClose} eventId={eventId} />
        )}
      </>
    </Dialog>
  );
};

export default EventDetail;

export enum FormMode {
  READ = "READ",
  CREATE = "CREATE",
  EDIT = "EDIT",
}
