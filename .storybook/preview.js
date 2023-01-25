import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/themes/index.js";
import { useMemo } from "react";

const THEMES = {
  light: theme.light,
  dark: theme.dark,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};
