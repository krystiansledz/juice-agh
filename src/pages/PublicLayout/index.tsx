import React from "react";
import Box from "@mui/system/Box";
import BottomNavigation from "../../components/BottomNavigation";

type Props = {
  children: JSX.Element;
};

const PublicLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <BottomNavigation />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </>
  );
};

export default PublicLayout;
