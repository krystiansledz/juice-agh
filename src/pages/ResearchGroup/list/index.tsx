import React, { useState, MouseEvent } from "react";
import GroupList from "./list";
import styled from "styled-components";
import GroupFilters from "./filters";
import { GridRowParams } from "@mui/x-data-grid";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import ResearchGroupDetail from "../details";

type Props = {};

const ResearchGroupPage: React.FC<Props> = () => {
  const [researchGroupId, setResearchGroupId] = useState<number>();

  const isDetailOpen = researchGroupId !== undefined;

  const handleOpenDetail = (id: number) => {
    setResearchGroupId(id);
  };

  const handleCloseDetail = () => {
    setResearchGroupId(undefined);
  };

  const handleRowClick = (
    params: GridRowParams<ResearchGroupType>,
    event: MouseEvent<HTMLElement>
  ) => {
    console.log(params);
    if (params.row.id !== null) handleOpenDetail(params.row.id);
    event.preventDefault();
  };

  return (
    <>
      <ResearchGroupDetail
        researchGroupId={researchGroupId as number}
        open={isDetailOpen}
        onClose={handleCloseDetail}
      />
      <ListContainer>
        <ListHeader>
          <GroupFilters />
        </ListHeader>
        <GroupList onRowClick={handleRowClick} />
      </ListContainer>
    </>
  );
};

export default ResearchGroupPage;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
`;

const ListHeader = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;