import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import AppPaths from "../../router/appPaths";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { appColors } from "../../theme/defaults";
import { useIsAdmin } from "../../auth/provider";

type DrawerItemProps = {
  text: string;
  icon: JSX.Element;
  path: string;
  hide?: boolean;
};

type Props = {
  isOpen: boolean;
};

const DrawerItems: React.FC<Props> = (props) => {
  const { isOpen } = props;
  const isAdmin = useIsAdmin();

  const items: Array<DrawerItemProps> = [
    {
      text: "Wydarzenia",
      icon: <EventNoteIcon />,
      path: AppPaths.Events(true),
    },
    {
      text: "Moje wydarzenia",
      icon: <EventIcon />,
      path: `${AppPaths.Events(true)}?myEvents=true`,
      hide: isAdmin,
    },
    {
      text: "Koła",
      icon: <GroupIcon />,
      path: AppPaths.ResearchGroups(true),
    },
    {
      text: "Koła do weryfikacji",
      icon: <GroupAddIcon />,
      path: `${AppPaths.ResearchGroups(true)}?toActivation=true`,
      hide: !isAdmin,
    },
  ];

  return (
    <>
      {items
        .filter(({ hide }) => !hide)
        .map(({ text, icon, path }) => (
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
