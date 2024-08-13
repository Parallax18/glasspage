import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button.theme";

export const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    primary: {
      700: "#182a21",
      900: "#011d0f",
      400: "#599B7B",
      100: "#ACCDBD",
      200: "#90BCA7",
    },
    shade: {
      black: "#1B1C1E",
      white: "#FAF9F6",
    },
    error: {
      200: "#E26E6A",
      400: "#D42620",
      50: "#FBEAE9",
    },
    success: {
      200: "#5FC381",
      400: "#0F973D",
      50: "#E7F6EC",
    },
    warning: {
      900: "#523300",
    },
    grey: {
      50: "#F9FAFB",
      600: "#475367",
      400: "#98A2B3",
      700: "#344054",
      800: "#0f1a3c",
      desc: "#667185",
    },
    bgColor: "#060606",
    dark: "#121212",
    borderColor: "#131313",
  },
});
