import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import { Button, DialogActions, DialogTitle } from "@mui/material";
import ResearchGroupFields from "./fields";
type Props = {
  researchGroupId: number;
  open: boolean;
  onClose: () => void;
};

const ResearchGroupDetail: React.FC<Props> = (props) => {
  const { researchGroupId, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle align="center" width="1">
        Koło naukowe
      </DialogTitle>
      <ResearchGroupFields researchGroupId={researchGroupId} />
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResearchGroupDetail;

export enum FormMode {
  READ = "READ",
  CREATE = "CREATE",
  EDIT = "EDIT",
}
