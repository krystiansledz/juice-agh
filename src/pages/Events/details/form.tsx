import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Control, useForm } from "react-hook-form";
import TextInput from "src/components/Form/TextInput";
import { FormMode } from ".";

type Props = {
  control: Control<any>;
  open?: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  title: string;
  eventId: number;
  formMode: FormMode;
  children?: any;
};

const EventDetailModal: React.FC<Props> = (props) => {
  const {
    control,
    eventId,
    formMode,
    children,
    open = false,
    onClose,
    title,
    ...rest
  } = props;
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  return (
    <>
      <DialogTitle
        id="alert-dialog-title"
        style={{
          textAlign: "center",
          width: "100%",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              marginTop: "32px",
              justifyContent: "space-evenly",
              overflow: "auto",
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
                name="reseatchGroup"
                label="Koło"
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
        </Stack>
        <DialogActions>
          <Stack
            direction="row"
            sx={{
              position: "flex-end",
              display: "flex",
              bottom: 32,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-start",
              }}
            >
              <Button type="submit" variant="contained">
                Usuń
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="contained">
                Edytuj
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={() => {
                  onClose();
                }}
              >
                Zamknij
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default EventDetailModal;
