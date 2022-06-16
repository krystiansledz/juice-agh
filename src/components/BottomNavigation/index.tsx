import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AppPaths from "../../router/appPaths";
import GroupIcon from "@mui/icons-material/Group";

const BottomNavigation = () => {
  const location = useLocation();

  const actions = [
    {
      label: "Wydarzenia",
      icon: <EventNoteIcon />,
      path: AppPaths.Events(),
    },
    {
      label: "Koła",
      icon: <GroupIcon />,
      path: AppPaths.ResearchGroups(),
    },
  ];

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MuiBottomNavigation showLabels value={location.pathname}>
        {actions.map((action) => (
          <BottomNavigationAction
            key={action.label}
            component={Link}
            to={action.path}
            label={action.label}
            showLabel={true}
            icon={action.icon}
            value={action.path}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;
