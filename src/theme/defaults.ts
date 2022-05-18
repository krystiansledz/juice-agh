import { ThemeOptions } from "@mui/material/styles";

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
    opaque: {
      50: "rgba(0, 0, 0, 0.05)",
      100: "rgba(0, 0, 0, 0.1)",
      150: "rgba(0, 0, 0, 0.15)",
      200: "rgba(0, 0, 0, 0.2)",
      300: "rgba(0, 0, 0, 0.3)",
      400: "rgba(0, 0, 0, 0.4)",
      500: "rgba(0, 0, 0, 0.5)",
      600: "rgba(0, 0, 0, 0.6)",
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
  },
} as ThemeOptions;

export default defaultOptions;
