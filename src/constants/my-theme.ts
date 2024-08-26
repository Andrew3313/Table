import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#425768",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          backgroundColor: "#2B3B48",
        },
        root: {
          backgroundColor: "#191919",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: "#2B3B48",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
  },
});
