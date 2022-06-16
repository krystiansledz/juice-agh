import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import {
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";
import ResearchGroupFields from "./fields";
import { putUser, useUser } from "../api";
import { Link } from "react-router-dom";
import AppPaths from "../../../router/appPaths";
import { AuthContext, useIsAdmin } from "../../../auth/provider";
import { useSnackbar } from "notistack";

type Props = {
  researchGroupId: number;
  open: boolean;
  onClose: () => void;
};

const ResearchGroupDetail: React.FC<Props> = (props) => {
  const { researchGroupId, open, onClose } = props;

  const researchGroup = useUser(researchGroupId);
  const [user] = React.useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const isAdmin = useIsAdmin();

  const handleToggleActivated = () => {
    if (researchGroup.data)
      putUser({
        ...researchGroup.data.user,
        activated: !researchGroup.data.user.activated,
      })
        .then(() => {
          enqueueSnackbar("Koło naukowe zostało edytowane", {
            variant: "success",
          });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar(error.response?.data?.detail, {
            variant: "error",
          });
        });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle align="center" width="1">
        Koło naukowe
      </DialogTitle>
      <DialogContent>
        {researchGroup.data ? (
          <>
            <ResearchGroupFields researchGroup={researchGroup.data} />
            <Box
              width="1"
              display="flex"
              justifyContent="center"
              marginY="1rem"
            >
              <Button
                component={Link}
                to={`${AppPaths.Events(!!user)}?researchGroup=${
                  researchGroup.data.user.login
                }`}
                variant="contained"
                sx={{
                  width: {
                    xs: "100%",
                    md: "50%",
                  },
                  margin: "0 auto",
                }}
              >
                Wydarzenia organizowane przez koło
              </Button>
            </Box>
          </>
        ) : (
          <div>Loading...</div>
        )}

        <DialogActions>
          {isAdmin && (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleToggleActivated}
            >
              {researchGroup.data?.user.activated ? "Dezaktywuj" : "Aktywuj"}
            </Button>
          )}
          <Button
            variant="contained"
            onClick={onClose}
            sx={{ marginLeft: { sm: "auto !important" } }}
          >
            Zamknij
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchGroupDetail;
