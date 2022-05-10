import React from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerHeader, StyledDrawer } from "./styles";
import DrawerItems from "./DrawerItems";

type Props = {
  isOpen: boolean;
  onMenuIconClick: () => void;
};

const Drawer: React.FC<Props> = (props) => {
  const { isOpen, onMenuIconClick } = props;

  return (
    <StyledDrawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={onMenuIconClick}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <DrawerItems isOpen={isOpen} />
      </List>
    </StyledDrawer>
  );
};

export default Drawer;
