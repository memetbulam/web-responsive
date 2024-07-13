"use client";
import SliderContextProvider from "@/contexts/useSliderContext";
import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <body>
      <ChakraProvider theme={chakraUiTheme}>
        <SliderContextProvider>{children}</SliderContextProvider>
      </ChakraProvider>
    </body>
  );
};

export default Providers;
