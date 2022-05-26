import { GridCellParams } from "@mui/x-data-grid";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import TooltipOnEllipsis from "../../../components/TooltipOnEllipsis";
import { Typography } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip/Tooltip";
import Chip from "@mui/material/Chip/Chip";
import { FieldsColors } from "../../../models/block.model";

// title

export const titleValueGridCellRenderer = (
  params: GridCellParams<ResearchGroupType["title"], ResearchGroupType>
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

// field

export const fieldValueGridCellRenderer = (
  params: GridCellParams<ResearchGroupType["field"], ResearchGroupType>
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
  params: GridCellParams<ResearchGroupType["block"], ResearchGroupType>
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