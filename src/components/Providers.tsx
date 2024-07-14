"use client";
import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SliderContextProvider from "@/contexts/useSliderContext";
import { chakraUiTheme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathName = usePathname();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token && pathName !== "/giris-yap") {
      router.push("/giris-yap");
    } else {
      setIsLoading(false);
    }
  }, [pathName, router, token]);

  if (isLoading) {
    return null;
  }

  return (
    <ChakraProvider theme={chakraUiTheme}>
      <SliderContextProvider>{children}</SliderContextProvider>
    </ChakraProvider>
  );
};

export default Providers;
