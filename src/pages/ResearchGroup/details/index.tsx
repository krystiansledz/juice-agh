import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { DialogTitle} from "@mui/material";
import ResearchGroupModal from "./form";
type Props = {
  eventId: number;
  open: boolean;
  onClose: () => void;
  title: string;
};

const ResearchGroupDetail: React.FC<Props> = (props) => {
  const { eventId, title, open, onClose } = props;

  const FORM_MODE = eventId === 0 ? FormMode.CREATE : FormMode.READ;

  const { handleSubmit, control } = useForm({});

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle align="center" width="1">
        {title}
      </DialogTitle>
      <ResearchGroupModal
        control={control}
        onSubmit={handleSubmit}
        open={open}
        onClose={onClose}
        eventId={eventId}
        formMode={FORM_MODE}
      />
    </Dialog>
  );
};

export default ResearchGroupDetail;

export enum FormMode {
  READ = "READ",
  CREATE = "CREATE",
  EDIT = "EDIT",
}
