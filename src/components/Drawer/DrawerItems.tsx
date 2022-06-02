import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import AppPaths from "../../router/appPaths";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import { appColors } from "../../theme/defaults";

type DrawerItemProps = {
  text: string;
  icon: JSX.Element;
  path: string;
};

type Props = {
  isOpen: boolean;
};

const DrawerItems: React.FC<Props> = (props) => {
  const { isOpen } = props;

  const items: Array<DrawerItemProps> = [
    {
      text: "Wydarzenia",
      icon: <EventNoteIcon />,
      path: AppPaths.Events(),
    },
    {
      text: "Moje wydarzenia",
      icon: <EventIcon />,
      path: AppPaths.Events(),
    },
    {
      text: "Koła",
      icon: <GroupIcon />,
      path: AppPaths.ResearchGroups(),
    },
  ];

  return (
    <>
      {items.map(({ text, icon, path }) => (
        <ListItemButton
          key={text}
          component={RouterLink}
          to={path}
          sx={{
            minHeight: 48,
            justifyContent: isOpen ? "initial" : "center",
            px: 2.5,
            color: appColors.white,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : "auto",
              justifyContent: "center",
              color: "currentColor",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
        </ListItemButton>
      ))}
    </>
  );
};

export default DrawerItems;
