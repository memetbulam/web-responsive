"use client";
import React, { FC } from "react";
import { chakraUiTheme } from "@/utils/theme";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const userInfo: { userName: string } = JSON.parse(
    Cookies.get("userInfo") as string
  );

  return (
    <React.Fragment>
      <header>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          height={{ base: "70px", sm: "90px", md: "100px" }}
          padding={{ base: "8px 4px", sm: "8px 10px", md: "30px 50px" }}
          boxShadow={`0px 6px 6px ${chakraUiTheme.colors.mainGray}`}
        >
          <Image
            width={{
              base: "90px",
              sm: "140px",
              md: "180px",
              lg: "180px",
              xl: "180px",
            }}
            src="images/logos/otovinn-logo.webp"
            alt="Otovinn Logo"
          />

          <Flex alignItems={"center"} gap={"16px"}>
            <Text
              fontSize={{ base: "12px", sm: "14px", md: "16px" }}
              textAlign={"end"}
            >
              Hoş geldin, <b>{userInfo?.userName}</b>
            </Text>
            <Button
              backgroundColor={"gray.100"}
              _hover={{ backgroundColor: "activeGreen", color: "white" }}
              transition={"all 0.3s"}
              fontSize={{ base: "12px", sm: "14px", md: "16px" }}
              padding={{ base: "0px 4px", sm: "0px 6px", md: "0px 16px" }}
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("userName");
                router.push("/login");
              }}
            >
              Çıkış yap
            </Button>
          </Flex>
        </Flex>
      </header>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
