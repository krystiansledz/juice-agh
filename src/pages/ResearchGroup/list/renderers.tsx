import { GridCellParams } from "@mui/x-data-grid";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import TooltipOnEllipsis from "../../../components/TooltipOnEllipsis";
import { Typography } from "@mui/material";
import BlockChip from "../../../components/BlockChip";
import FieldChip from "../../../components/FieldChip";

// title

export const titleValueGridCellRenderer = (
  params: GridCellParams<ResearchGroupType["title"], ResearchGroupType>
) => {
  return (
    <TooltipOnEllipsis title={params.value ?? ""}>
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

  return <FieldChip field={field} />;
};

// block

export const blockValueGridCellRenderer = (
  params: GridCellParams<ResearchGroupType["block"], ResearchGroupType>
) => {
  const block = params.value;
  if (!block) return "-";

  return <BlockChip block={block} />;
};
