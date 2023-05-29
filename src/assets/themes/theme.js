import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006437", //dark green
      alt: "#00B061", //light green
    },
    secondary: {
      main: "#bca644", //golden
      alt: "#3D3616", //brown
    },
    accent: {
      main: "#a8b6bf", //silver
    },
    text: {
      primary: "#403E37", //dark brown
      secondary: "#7EAFB1", //light blue
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
