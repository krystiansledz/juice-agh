import { Button, DialogActions, DialogContent, Stack } from "@mui/material";
import { Control } from "react-hook-form";
import CheckboxWithLabel from "src/components/Form/CheckboxWithLabel";
import TextInput from "src/components/Form/TextInput";
import { FormMode } from "src/pages/Events/details";

type Props = {
  control: Control<any>;
  open?: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  eventId: number;
  formMode: FormMode;
  children?: any;
};

const ResearchGroupModal: React.FC<Props> = (props) => {
  const { control, formMode, onClose} = props;

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
              name="email"
              label="Email"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="nameResearchGroup"
              label="Nazwa Koła"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="lastName"
              label="Nazwisko"
              disabled={formMode === FormMode.READ}
            />
          </Stack>

          <Stack spacing={2}>
            <TextInput
              control={control}
              name="block"
              label="Blok"
              disabled={formMode === FormMode.READ}
            />
            <TextInput
              control={control}
              name="firstName"
              label="Imię"
              disabled={formMode === FormMode.READ}
            />
            <CheckboxWithLabel
              control={control}
              name="isActive"
              label="Aktywne"
              disabled={formMode === FormMode.READ}
            />
          </Stack>
        </Stack>
        {formMode === FormMode.READ && (
          <Stack
            sx={{
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "40%",
                margin: "0 auto",
              }}
            >
              Wydarzenia organizowane przez koło
            </Button>
          </Stack>
        )}
        <DialogActions
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "0.5rem" },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: { sm: "auto !important" } }}
          >
            Dodaj
          </Button>
          <Button variant="contained" onClick={onClose}>
            Zamknij
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default ResearchGroupModal;
