import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  xs: "200px",
  sm: "540px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};


import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

// Adicione a fonte "Roboto" ao tema estendido
export const theme = extendTheme(
  {
    fonts: {
      body: "Roboto, sans-serif",
      heading: "Roboto, sans-serif",
    },
  },
  {
    breakpoints,
  }
);
