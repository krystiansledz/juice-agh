import React, { useState, MouseEvent, useEffect } from "react";
import { ResearchGroupType } from "../../../models/researchGroupDetails.model";
import { UserType } from "../../../models/user.model";
import { GridCellParams } from "@mui/x-data-grid";
import DataGrid from "../../../components/DataGrid";
import { GridRowParams } from "@mui/x-data-grid";
import { useSearchParams } from "react-router-dom";
import useColumns from "./columns";

type Props = {
  users: UserType[] | undefined;
  isLoading: boolean;
  onRowClick: (
    props: GridRowParams<ResearchGroupType>,
    event: MouseEvent<HTMLElement>
  ) => void;
};

const GroupList: React.FC<Props> = (props) => {
  const { onRowClick, users, isLoading } = props;
  const columns = useColumns();
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users || []);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const toActivation = searchParams.get("toActivation") === "true";

  useEffect(() => {
    if (users) {
      setFilteredUsers(
        users
          .filter(
            (extraUser) => !search || extraUser.user?.login?.includes(search)
          )
          .filter((extraUser) => !toActivation || !extraUser.user.activated)
      );
    }
  }, [users, searchParams]);

  const handleCellClick = (
    param: GridCellParams,
    event: React.MouseEvent<HTMLElement>
  ) => {
    param.field === "link" && event.stopPropagation();
  };

  return (
    <DataGrid
      loading={isLoading}
      rows={filteredUsers}
      columns={columns}
      onRowClick={onRowClick}
      disableSelectionOnClick
      disableColumnMenu
      hideFooterPagination={true}
      onCellClick={handleCellClick}
    />
  );
};

export default GroupList;
