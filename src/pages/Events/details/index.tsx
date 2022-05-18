import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";

type Props = {
  eventId: number;
  open: boolean;
  onClose: () => void;
};

const EventDetail: React.FC<Props> = (props) => {
  const { eventId, open, onClose } = props;

  const FORM_MODE = eventId === 0 ? FormMode.CREATE : FormMode.EDIT;

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth={true}>
      {FORM_MODE}
      {/*TODO: Dorobić detale*/}
    </Dialog>
  );
};

export default EventDetail;

enum FormMode {
  READ = "READ",
  CREATE = "CREATE",
  EDIT = "EDIT",
}
