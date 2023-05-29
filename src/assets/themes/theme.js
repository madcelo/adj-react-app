import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    whitesmoke: "#E9E9E9",
    palmeirasGreen: "#00532E",
    darkGreen: "#002F1F",
    evenDarkerGreen: "#002A21",
    white: "#FFFFFF",
    golden: "#9B8542",
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
