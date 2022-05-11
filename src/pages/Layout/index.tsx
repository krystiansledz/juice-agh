import Box from "@mui/system/Box";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import Drawer from "../../components/Drawer";
import { DrawerHeader } from "../../components/Drawer/styles";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar isOpen={isDrawerOpen} onMenuIconClick={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onMenuIconClick={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </>
  );
};

export default Layout;
