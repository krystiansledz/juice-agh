import { Button, DialogActions, DialogContent, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import TextInput from "src/components/Form/TextInput";
import { FormMode } from ".";
import React from "react";
import { EventType } from "../../../models/calendarEvent.model";
import { defaultValues, EventFieldValues, EventSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "../../../components/Form/DateTimePicker";
import { deleteEvent, postEvent, putEvent } from "../api";
import { useSnackbar } from "notistack";
import { AuthContext } from "../../../auth/provider";

type Props = {
  event?: EventType | undefined;
  onClose: () => void;
  formMode: FormMode;
};

const FormEventDetailModal: React.FC<Props> = (props) => {
  const { formMode, onClose, event } = props;
  const [user] = React.useContext(AuthContext);

  const { handleSubmit, control, formState } = useForm<EventFieldValues>({
    resolver: yupResolver(EventSchema),
    defaultValues: event
      ? {
          ...event,
          publicationDate: new Date(event?.publicationDate || ""),
          startDate: new Date(event?.startDate || ""),
        }
      : defaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: EventFieldValues) => {
    if (formMode === FormMode.CREATE) {
      postEvent(user!, {
        ...data,
        startDate: new Date(data.startDate),
        publicationDate: new Date(data.startDate),
      })
        .then(() => {
          enqueueSnackbar("Wydarzenie zostało dodane", {
            variant: "success",
          });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar(error.response?.data?.detail, {
            variant: "error",
          });
        });
    }
    if (formMode === FormMode.EDIT) {
      putEvent(event!.id, data)
        .then(() => {
          enqueueSnackbar("Wydarzenie zostało edytowane", {
            variant: "success",
          });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar(error.response?.data?.detail, {
            variant: "error",
          });
        });
    }
  };

  const handleDelete = () => {
    deleteEvent(event!.id)
      .then(() => {
        enqueueSnackbar("Wydarzenie zostało usunięte", {
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <TextInput control={control} name="title" label="Nazwa" />
            <DateTimePicker
              control={control}
              name="startDate"
              label="Data wydarzenia"
            />
          </Stack>

          <Stack spacing={2}>
            <TextInput control={control} name="description" label="Opis" />
            <DateTimePicker
              control={control}
              name="publicationDate"
              label="Data publikacji"
            />
            <TextInput control={control} name="link" label="Link" />
          </Stack>
        </Stack>
        <DialogActions
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "0.5rem" },
          }}
        >
          {formMode === FormMode.EDIT && (
            <>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleDelete}
              >
                Usuń
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginLeft: { sm: "auto !important" } }}
              >
                Edytuj
              </Button>
            </>
          )}
          {formMode === FormMode.CREATE && (
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
    </form>
  );
};

export default FormEventDetailModal;
