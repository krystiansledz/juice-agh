import TooltipOnEllipsis from "./TooltipOnEllipsis";
import { Typography } from "@mui/material";
import { FieldsColors, FieldsEnum } from "../models/block.model";
import Chip from "@mui/material/Chip/Chip";
import React from "react";
import { capitalizeString } from "../utils/strings";

type Props = {
  field: FieldsEnum;
};

const FieldChip: React.FC<Props> = ({ field }) => {
  return (
    <Chip
      label={
        <TooltipOnEllipsis title={capitalizeString(field)}>
          <Typography noWrap fontSize={12}>
            {field}
          </Typography>
        </TooltipOnEllipsis>
      }
      sx={{
        color: FieldsColors[field].color,
        backgroundColor: FieldsColors[field].backgroundColor,
      }}
    />
  );
};

export default FieldChip;
