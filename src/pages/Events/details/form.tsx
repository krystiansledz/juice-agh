import { Button, DialogActions, DialogContent, Stack } from "@mui/material";
import { Control } from "react-hook-form";
import TextInput from "src/components/Form/TextInput";
import { FormMode } from ".";
import React from "react";
import {
  useIsAdmin,
  useIsAuthenticated,
  useIsOwner,
} from "../../../auth/provider";
import { EventType } from "../../../models/calendarEvent.model";

type Props = {
  event: EventType | undefined;
  control: Control<any>;
  onClose: () => void;
  onSubmit: (values: any) => void;
  formMode: FormMode;
};

const EventDetailModal: React.FC<Props> = (props) => {
  const { control, formMode, onClose, event } = props;

  const isAdmin = useIsAdmin();
  const isOwner = useIsOwner(event?.user.id);
  const isAuthenticated = useIsAuthenticated();

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
            <TextInput
              control={control}
              name="name"
              label="Nazwa"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="date"
              label="Data"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="image"
              label="Zdjecie"
              disabled={formMode === FormMode.READ}
            />
          </Stack>

          <Stack spacing={2}>
            <TextInput
              control={control}
              name="discription"
              label="Opis"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="publishDate"
              label="Data publikacji"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="link"
              label="Link"
              disabled={formMode === FormMode.READ}
            />
          </Stack>
        </Stack>
        <DialogActions
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "0.5rem" },
          }}
        >
          {(isOwner || isAdmin) && (
            <>
              <Button color="secondary" variant="contained">
                Usuń
              </Button>
              {formMode === FormMode.EDIT && (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginLeft: { sm: "auto !important" } }}
                >
                  Edytuj
                </Button>
              )}
            </>
          )}
          {isAuthenticated && formMode === FormMode.CREATE && (
            <Button
              type="submit"
              variant="contained"
              sx={{ marginLeft: { sm: "auto !important" } }}
            >
              Dodaj
            </Button>
          )}
          <Button variant="contained" onClick={onClose}>
            Zamknij
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default EventDetailModal;
