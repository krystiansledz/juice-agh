import { Stack } from "@mui/material";
import React from "react";
import WithLabel from "../../../components/Form/WithLabel";
import BlockChip from "../../../components/BlockChip";
import FieldChip from "../../../components/FieldChip";
import { UserType } from "../../../models/user.model";

type Props = {
  researchGroup: UserType;
};

const ResearchGroupFields: React.FC<Props> = (props) => {
  const { researchGroup } = props;
  return (
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
      <>
        <Stack spacing={2}>
          <WithLabel label="Nazwa Koła">
            {researchGroup.user.login || "-"}
          </WithLabel>
          <WithLabel label="Obszar">
            <FieldChip field={researchGroup.field} />
          </WithLabel>
          <WithLabel label="Blok">
            <BlockChip block={researchGroup.block} />
          </WithLabel>
        </Stack>

        <Stack spacing={2}>
          <WithLabel label="Imię">
            {researchGroup.user.firstName || "-"}
          </WithLabel>
          <WithLabel label="Nazwisko">
            {researchGroup.user.lastName || "-"}
          </WithLabel>
          <WithLabel label="Email">{researchGroup.user.email || "-"}</WithLabel>
        </Stack>
      </>
    </Stack>
  );
};

export default ResearchGroupFields;
