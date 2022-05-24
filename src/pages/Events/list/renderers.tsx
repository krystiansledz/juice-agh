import React from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { EventType } from "../../../models/calendarEvent.model";
import { toDdMmYyAndTime } from "../../../utils/dates";
import TooltipOnEllipsis from "../../../components/TooltipOnEllipsis";
import { Typography } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip/Tooltip";
import Chip from "@mui/material/Chip/Chip";
import { FieldsColors } from "../../../models/block.model";

// title

export const titleValueGridCellRenderer = (
  params: GridCellParams<EventType["title"], EventType>
) => {
  return (
    <TooltipOnEllipsis
      title={params.value ?? ""}
      {...sharedTooltipOnEllipsisProps}
    >
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
    <TooltipOnEllipsis title={value} {...sharedTooltipOnEllipsisProps}>
      <Typography noWrap fontSize={14}>
        {value}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// description

export const descriptionValueGridCellRenderer = (
  params: GridCellParams<EventType["description"], EventType>
) => {
  return (
    <TooltipOnEllipsis
      title={params.value ?? ""}
      {...sharedTooltipOnEllipsisProps}
    >
      <Typography noWrap fontSize={14}>
        {params.value}
      </Typography>
    </TooltipOnEllipsis>
  );
};

// field

export const fieldValueGridCellRenderer = (
  params: GridCellParams<EventType["field"], EventType>
) => {
  const field = params.value;
  if (!field) return "-";

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

// block

export const blockValueGridCellRenderer = (
  params: GridCellParams<EventType["block"], EventType>
) => {
  const block = params.value;
  if (!block) return "-";

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

//

const sharedTooltipOnEllipsisProps: Pick<TooltipProps, "placement" | "arrow"> =
  {
    placement: "bottom",
    arrow: true,
  };

const capitalizeString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
