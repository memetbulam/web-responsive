import React, { FC } from "react";
import { chakraUiTheme } from "@/utils/theme";
import { Flex, Image } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Flex
          alignItems={"center"}
          justifyContent={"flex-start"}
          height={{ base: "70px", sm: "90px", md: "100px" }}
          padding={"10px 30px"}
          boxShadow={`0px 6px 6px ${chakraUiTheme.colors.mainGray}`}
        >
          <Image src="images/logos/otovinn-logo.webp" alt="Otovinn Logo" />
        </Flex>
      </header>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
