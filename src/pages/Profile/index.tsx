import React from "react";
import Stack from "@mui/material/Stack";
import WithLabel from "src/components/Form/WithLabel";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { BlocksEnum, FieldsColors, FieldsEnum } from "../../models/block.model";
import { AuthContext } from "../../auth/provider";
import PasswordForm from "./form";

type Props = {
  field?: FieldsEnum;
};

const ProfilePage: React.FC<Props> = (props) => {
  const { field = FieldsEnum.ZIELONY } = props;
  const [user] = React.useContext(AuthContext);

  const block = BlocksEnum.INFORMATYCZNY;

  return (
    <Stack>
      <Typography fontSize={"2rem"} marginTop={"2rem"} textAlign={"center"}>
        Mój profil
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          marginTop: "2rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: { xs: "50%", md: "15%" },
          }}
        >
          <WithLabel label={"Imię"}>{user?.firstName}</WithLabel>
          <WithLabel label={"Nazwisko"}>{user?.lastName}</WithLabel>
          <WithLabel label={"Email"}>{user?.email}</WithLabel>
          <WithLabel label={"Blok"}>
            <Chip
              label={
                <Typography noWrap fontSize="0.75rem">
                  {block}
                </Typography>
              }
            />
          </WithLabel>
          <WithLabel label={"Nazwa koła"}>{user?.login}</WithLabel>
          <WithLabel label={"Obszar"} component>
            <Chip
              label={
                <Typography noWrap fontSize="0.75rem">
                  {field}
                </Typography>
              }
              sx={{
                color: FieldsColors[field].color,
                backgroundColor: FieldsColors[field].backgroundColor,
              }}
            />
          </WithLabel>
        </Stack>
        <PasswordForm />
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
