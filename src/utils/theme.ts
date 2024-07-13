import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

export const chakraUiTheme = extendTheme({
  breakpoints,
  colors: {
    mainGreen: "#38A169",
    activeGreen: "#2F855A",
    mainGray: "#EDF2F7",
  },
});
