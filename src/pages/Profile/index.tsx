import { Button } from "@mui/material";
import React from "react";
import PasswordInput from "src/components/Form/PasswordInput";
import Stack from "@mui/material/Stack";
import WithLabel from "src/components/Form/WithLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ChangePasswordFieldValues,
  ChangePasswordSchema,
} from "../ChangePassword/form";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { BlocksEnum, FieldsColors, FieldsEnum } from "../../models/block.model";

type Props = {
  field?: FieldsEnum;
};

const ProfilePage: React.FC<Props> = (props) => {
  const { handleSubmit, control } = useForm<ChangePasswordFieldValues>({
    resolver: yupResolver(ChangePasswordSchema),
  });

  const { field = FieldsEnum.ZIELONY } = props;

  const block = BlocksEnum.INFORMATYCZNY;

  const onSubmit = (data: any) => {
    // TODO: Connect with API
  };

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
          <WithLabel label={"Imię"}>Piotr</WithLabel>
          <WithLabel label={"Nazwisko"}>Piotrowski</WithLabel>
          <WithLabel label={"Email"}>piotrek@piotrek.pl</WithLabel>
          <WithLabel label={"Blok"}>
            <Chip
              label={
                <Typography noWrap fontSize="0.75rem">
                  {block}
                </Typography>
              }
            />
          </WithLabel>
          <WithLabel label={"Nazwa koła"}>KNI Kernel</WithLabel>
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

        <Stack
          sx={{
            width: { xs: "50%", md: "15%" },
          }}
          spacing={2}
          marginTop="2rem"
          marginBottom="2rem"
          onSubmit={handleSubmit(onSubmit)}
        >
          <PasswordInput
            label={"Hasło"}
            name={"newPassword"}
            control={control}
          />
          <PasswordInput
            label={"Powtórz hasło"}
            name={"confirmPassword"}
            control={control}
          />
          <Button type="submit" variant="contained">
            Zmień hasło
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
