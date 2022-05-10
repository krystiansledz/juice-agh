import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppBar } from "./styles";
import UserMenu from "./components/UserMenu";

type Props = {
  isOpen: boolean;
  onMenuIconClick: () => void;
};

const AppBar: React.FC<Props> = (props) => {
  const { isOpen, onMenuIconClick } = props;

  return (
    <StyledAppBar position="fixed" open={isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuIconClick}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <UserMenu />
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
