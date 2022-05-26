import { Button, DialogContent, Stack } from "@mui/material";
import React from "react";
import WithLabel from "../../../components/Form/WithLabel";
import BlockChip from "../../../components/BlockChip";
import { BlocksEnum, FieldsEnum } from "../../../models/block.model";
import FieldChip from "../../../components/FieldChip";

type Props = {
  researchGroupId: number;
};

const ResearchGroupFields: React.FC<Props> = () => {
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
          <>
            <Stack spacing={2}>
              <WithLabel label="Email">Email</WithLabel>
              <WithLabel label="Nazwa Koła">Nazwa Koła</WithLabel>
              <WithLabel label="Nazwisko">Nazwisko</WithLabel>
            </Stack>

            <Stack spacing={2}>
              <WithLabel label="Obszar">
                <FieldChip field={FieldsEnum.CZERWONY} />
              </WithLabel>
              <WithLabel label="Blok">
                <BlockChip block={BlocksEnum.MATEMATYCZNY} />
              </WithLabel>
              <WithLabel label="Imię">Imię</WithLabel>
              {false && ( // show only for admin
                <WithLabel label="Aktywne">{true ? "Tak" : "Nie"}</WithLabel>
              )}
            </Stack>
          </>
        </Stack>

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
      </DialogContent>
    </>
  );
};

export default ResearchGroupFields;
