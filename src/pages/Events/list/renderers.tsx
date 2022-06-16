import React from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { EventType } from "../../../models/calendarEvent.model";
import { toDdMmYyAndTime } from "../../../utils/dates";
import TooltipOnEllipsis from "../../../components/TooltipOnEllipsis";
import { Typography } from "@mui/material";
import FieldChip from "../../../components/FieldChip";
import BlockChip from "../../../components/BlockChip";
import Link from "@mui/material/Link";
import { BlocksEnum, FieldsEnum } from "../../../models/block.model";

// title

export const titleValueGridCellRenderer = (
  params: GridCellParams<EventType["title"], EventType>
) => {
  return (
    <TooltipOnEllipsis title={params.value ?? ""}>
      <Typography noWrap fontSize={16}>
        {params.value}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// date

export const dateValueGridCellRenderer = (
  params: GridCellParams<EventType["startDate"], EventType>
) => {
  const value = params.value ? toDdMmYyAndTime(params.value) : "-";
  return (
    <TooltipOnEllipsis title={value}>
      <Typography noWrap fontSize={14}>
        {value}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// link

export const linkValueGridCellRenderer = (
  params: GridCellParams<EventType["link"], EventType>
) => {
  const value = params.value;
  return (
    <TooltipOnEllipsis title={value ?? ""}>
      <Typography noWrap fontSize={14}>
        {value ? (
          <Link href={value} target="_blank">
            {value}
          </Link>
        ) : (
          "-"
        )}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// research group

export const researchGroupValueGridCellRenderer = (
  params: GridCellParams<string, EventType>
) => {
  const value = params.value;
  if (!value) return "-";

  return (
    <TooltipOnEllipsis title={value ?? ""}>
      <Typography noWrap fontSize={14}>
        {value || "-"}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// field

export const fieldValueGridCellRenderer = (
  params: GridCellParams<FieldsEnum, EventType>
) => {
  const field = params.value;
  if (!field) return "-";

  return <FieldChip field={field} />;
};

// block

export const blockValueGridCellRenderer = (
  params: GridCellParams<BlocksEnum, EventType>
) => {
  const block = params.value;
  if (!block) return "-";

  return <BlockChip block={block} />;
};
