import React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { StyledMenu } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/system/Box";
import { useNavigate } from "react-router-dom";
import AppPaths from "../../../router/appPaths";
import { useLogout } from "../../../auth/provider";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const logout = useLogout();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box ml={"auto"}>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(AppPaths.Profile());
          }}
        >
          Mój profil
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Wyloguj się
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};

export default UserMenu;
