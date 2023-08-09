import { extendTheme } from "@chakra-ui/react";

export const colors = {
  brand: {
    primary: "hsl(178, 98%, 60%)",
    light: "hsl(178, 98%, 70%)",
    dark: "hsl(178, 98%, 50%)",
  },
};

export const theme = extendTheme({
  colors,
});
