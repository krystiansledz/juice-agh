import TooltipOnEllipsis from "./TooltipOnEllipsis";
import { Typography } from "@mui/material";
import { BlocksEnum } from "../models/block.model";
import Chip from "@mui/material/Chip/Chip";
import React from "react";
import { capitalizeString } from "../utils/strings";

type Props = {
  block: BlocksEnum;
};

const BlockChip: React.FC<Props> = ({ block }) => {
  return (
    <Chip
      label={
        <TooltipOnEllipsis title={capitalizeString(block)}>
          <Typography noWrap fontSize={12}>
            {block}
          </Typography>
        </TooltipOnEllipsis>
      }
    />
  );
};

export default BlockChip;
