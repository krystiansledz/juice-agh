import React from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { EventType } from "../../../models/calendarEvent.model";
import { toDdMmYyAndTime } from "../../../utils/dates";
import TooltipOnEllipsis from "../../../components/TooltipOnEllipsis";
import { Typography } from "@mui/material";
import FieldChip from "../../../components/FieldChip";
import BlockChip from "../../../components/BlockChip";
import Link from "@mui/material/Link";

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
  params: GridCellParams<EventType["extraUser"], EventType>
) => {
  const value = params.row.extraUser?.user?.login;
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
  params: GridCellParams<EventType["extraUser"], EventType>
) => {
  const field = params.row.extraUser?.field;
  if (!field) return "-";

  return <FieldChip field={field} />;
};

// block

export const blockValueGridCellRenderer = (
  params: GridCellParams<EventType["extraUser"], EventType>
) => {
  const block = params.row.extraUser?.block;
  if (!block) return "-";

  return <BlockChip block={block} />;
};
