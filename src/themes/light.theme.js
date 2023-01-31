import { createTheme } from "@mui/material";

/*
##### Pantallas móbiles:
Más chica: 360 x 640
Más grande: 428 x 926
##### Pantallas tablets:
Más chica: 601 x 962
Más grande: 800 x 1280
##### Pantallas monitores:
Más chica: 800 x 600
Mediana: 1280 x 720
Más grande: 1920 x 1080
##### orientation: portrait => width <= height
*/

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#7FA7C3",
    },
    ternary: {
      main: "#cf7373",
    },
  },

  breakpoints: {
    values: {
      tablet_min_1200: 1200,
      tablet_min_900: 900,
      tablet_min_600: 600,
      mobile_max_750: 750,
      mobile_max_599: 599.95,
      lg: 1200,
      md: 751,
      sm: 600,
      xs: 0,
    },
  },
});
