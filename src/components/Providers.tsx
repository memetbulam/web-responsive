"use client";
import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <body>
      <ChakraProvider theme={chakraUiTheme}>{children}</ChakraProvider>
    </body>
  );
};

export default Providers;
