import React, { useState } from "react";
import { chakraUiTheme } from "@/utils/theme";
import { Box, Flex, Image, useBreakpoint } from "@chakra-ui/react";
import { topbarMenu } from "@/utils/constants";
import Link from "next/link";
import ProfileDetail from "./ProfileDetail";
import { breakpointsValues } from "@/utils/enums";

const Topbar = () => {
  const [isMenuHovered, setIsMenuHovered] = useState<{
    key: string | undefined;
    value: boolean;
  }>({
    key: undefined,
    value: false,
  });
  const currentBreakpointValue = useBreakpoint();
  const [isProfileButtonClicked, setIsProfileButtonClicked] = useState(false);

  return (
    <Flex
      position={"fixed"}
      top={"0px"}
      left={"0px"}
      right={"0px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={{ base: "70px", sm: "90px", md: "100px" }}
      padding={{ base: "8px 4px", sm: "8px 10px", md: "30px 50px" }}
      zIndex={100}
      backgroundColor={"white"}
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
      {!(
        currentBreakpointValue === breakpointsValues.Base ||
        currentBreakpointValue === breakpointsValues.Sm
      ) && (
        <Flex as={"nav"} alignItems={"center"} gap={"16px"}>
          <Box as="ul" display={"flex"} position={"relative"}>
            {topbarMenu.map(({ key, icon: Icon, path, title }, index) => {
              const lastIndex = topbarMenu.length - 1 === index;
              return (
                <Box
                  key={key}
                  as="li"
                  textDecor={"none"}
                  listStyleType={"none"}
                >
                  <Link
                    href={path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontWeight: "500",
                      marginRight: lastIndex ? "0px" : "16px",
                      color:
                        isMenuHovered.key === key && isMenuHovered.value
                          ? chakraUiTheme.colors.activeGreen
                          : "black",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={() => {
                      setIsMenuHovered({ key, value: true });
                    }}
                    onMouseLeave={() => {
                      setIsMenuHovered({ key: undefined, value: false });
                    }}
                    onClick={
                      key === "profile"
                        ? () => setIsProfileButtonClicked(true)
                        : undefined
                    }
                  >
                    <Icon
                      width={"16px"}
                      height={"16px"}
                      style={{ transition: "fill 0.3s", fontWeight: "500" }}
                      fill={
                        isMenuHovered.key === key && isMenuHovered.value
                          ? chakraUiTheme.colors.activeGreen
                          : "black"
                      }
                    />
                    {title}
                  </Link>
                </Box>
              );
            })}
            <ProfileDetail
              isProfileButtonClicked={isProfileButtonClicked}
              setIsProfileButtonClicked={setIsProfileButtonClicked}
            />
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default Topbar;
