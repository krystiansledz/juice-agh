import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {
  label: string;
  children: any;
  component?: boolean;
};

const WithLabel: React.FC<Props> = (props) => {
  const { label, children, component = false } = props;

  return (
    <Stack>
      <Typography fontSize="1.25rem" fontWeight="bold" color="primary">
        {label}
      </Typography>
      {component ? children : <Typography fontSize="1.25rem">{children}</Typography>}
    </Stack>
  );
};

export default WithLabel;
