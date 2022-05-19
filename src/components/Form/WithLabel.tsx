import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {
  label: string;
  children: any;
};

const WithLabel: React.FC<Props> = (props) => {
  const { label, children } = props;

  return (
    <Stack spacing={0}>
      <Typography fontSize="24px" fontWeight="bold" color="primary">
        {label}
      </Typography>
      <Typography fontSize="24px">{children}</Typography>
    </Stack>
  );
};

export default WithLabel;
