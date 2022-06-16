import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import WithLabel from "src/components/Form/WithLabel";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { BlocksEnum, FieldsColors, FieldsEnum } from "../../models/block.model";
import { AuthContext, useIsAdmin } from "../../auth/provider";
import PasswordForm from "./form";
import { extraMe } from "../../auth/api";
import { UserType } from "../../models/user.model";

const ProfilePage: React.FC = () => {
  const [user] = React.useContext(AuthContext);
  const [extraUser, setExtraUser] = useState<UserType>();
  const isAdmin = useIsAdmin();
  const field = extraUser?.field;
  const block = extraUser?.block;

  useEffect(() => {
    if (!isAdmin) extraMe().then((data) => setExtraUser(data));
  }, [isAdmin]);

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
          <WithLabel label={isAdmin ? "Login" : "Nazwa koła / Login"}>
            {user?.login}
          </WithLabel>
          {!isAdmin && field && block && (
            <>
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
              <WithLabel label={"Blok"}>
                <Chip
                  label={
                    <Typography noWrap fontSize="0.75rem">
                      {block}
                    </Typography>
                  }
                />
              </WithLabel>
            </>
          )}
          <WithLabel label={"Imię"}>{user?.firstName}</WithLabel>
          <WithLabel label={"Nazwisko"}>{user?.lastName}</WithLabel>
          <WithLabel label={"Email"}>{user?.email}</WithLabel>
        </Stack>
        <PasswordForm />
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
