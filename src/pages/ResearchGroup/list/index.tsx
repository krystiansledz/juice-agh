import React, { useState, MouseEvent, useEffect } from "react";
import GroupList from "./list";
import styled from "styled-components";
import GroupFilters from "./filters";
import { GridRowParams } from "@mui/x-data-grid";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import ResearchGroupDetail from "../details";
import { useUsers } from "../api";

type Props = {};

const ResearchGroupPage: React.FC<Props> = () => {
  const [researchGroupId, setResearchGroupId] = useState<number>();
  const isDetailOpen = researchGroupId !== undefined;

  const users = useUsers();

  useEffect(() => {
    if (!isDetailOpen) {
      users.refetch();
    }
  }, [isDetailOpen]);

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
    if (params.row.id !== null) handleOpenDetail(params.row.id);
    event.preventDefault();
  };

  return (
    <>
      {researchGroupId !== undefined && (
        <ResearchGroupDetail
          researchGroupId={researchGroupId as number}
          open={isDetailOpen}
          onClose={handleCloseDetail}
        />
      )}
      <ListContainer>
        <ListHeader>
          <GroupFilters />
        </ListHeader>
        <GroupList
          users={users.data}
          isLoading={users.isLoading}
          onRowClick={handleRowClick}
        />
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
