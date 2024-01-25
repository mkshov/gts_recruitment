"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#3598DB",
    },
    secondary: {
      main: "#021638",
      light: "#fff",
    },
    error: {
      main: red[400],
    },
    background: {
      // pink
      default: "#F9F9FB",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 960,
      lg: 1350,
      xl: 1920,
      my: 1500,
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
