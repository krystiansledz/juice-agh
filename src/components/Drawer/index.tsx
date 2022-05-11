import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerHeader, StyledDrawer } from "./styles";
import DrawerItems from "./DrawerItems";
import { appColors } from "../../theme/defaults";

type Props = {
  isOpen: boolean;
  onMenuIconClick: () => void;
};

const Drawer: React.FC<Props> = (props) => {
  const { isOpen, onMenuIconClick } = props;

  return (
    <StyledDrawer variant="permanent" open={isOpen} color="primary">
      <DrawerHeader>
        <IconButton onClick={onMenuIconClick}>
          <ChevronLeftIcon sx={{ color: appColors.white }} />
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
