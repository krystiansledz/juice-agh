import { createTheme, ThemeOptions } from "@mui/material";

const theme = createTheme();

export const appColors = {
  primary: "#00693C",
  secondary: "#A71930",
  black: "#1E1E1E",
  white: "#FFFFFF",
};

const defaultOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#00693C",
    },
    secondary: {
      main: "#A71930",
    },
    text: {
      primary: "#1E1E1E",
    },
    background: {
      default: "#FFFFFF",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#ffcc80",
    },
    info: {
      main: "#90caf9",
    },
    success: {
      main: "#a5d6a7",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    fontWeightLight: 200,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: appColors.primary,
          color: appColors.white,
          borderRight: 0,
        },
      },
    },
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       color: "currentColor",
    //     },
    //   },
    // },
  },
};

export default defaultOptions;
