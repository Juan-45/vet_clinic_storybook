import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    ternary: {
      main: "#6db1f4",
    },
    info: { main: "#007bbe" },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});
