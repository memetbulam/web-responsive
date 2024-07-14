import React, { useState } from "react";
import { topbarMenu } from "@/utils/constants";
import { chakraUiTheme } from "@/utils/theme";
import { Box, Flex, useBreakpoint } from "@chakra-ui/react";
import Link from "next/link";
import ProfileDetail from "../topbar/ProfileDetail";
import { breakpointsValues } from "@/utils/enums";
import { usePathname } from "next/navigation";

const Footerbar = () => {
  const [isMenuHovered, setIsMenuHovered] = useState<{
    key: string | undefined;
    value: boolean;
  }>({
    key: undefined,
    value: false,
  });
  const [isProfileButtonClicked, setIsProfileButtonClicked] = useState(false);
  const currentBreakpointValue = useBreakpoint();
  const pathName = usePathname();

  if (
    currentBreakpointValue === breakpointsValues.Base ||
    currentBreakpointValue === breakpointsValues.Sm
  ) {
    return (
      <Flex
        position={"fixed"}
        bottom={"0px"}
        left={"0px"}
        right={"0px"}
        height={{ base: "70px", sm: "90px", md: "100px" }}
        backgroundColor={"white"}
        padding={{ base: "8px 4px", sm: "8px 10px", md: "30px 50px" }}
        zIndex={100}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={`0px -6px 6px ${chakraUiTheme.colors.mainGray}`}
      >
        <Flex as={"nav"} alignItems={"center"} gap={"16px"}>
          <Box as="ul" display={"flex"} position={"relative"}>
            {topbarMenu.map(({ key, icon: Icon, path, title }, index) => {
              const lastIndex = topbarMenu.length - 1 === index;
              const activeLink =
                (isMenuHovered.key === key && isMenuHovered.value) ||
                pathName === path;
              return (
                <Box
                  key={key}
                  as="li"
                  textDecor={"none"}
                  listStyleType={"none"}
                >
                  <Link
                    scroll={false}
                    href={path}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      fontWeight: "500",
                      marginRight: lastIndex ? "0px" : "20px",
                      color: activeLink
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
                      width={"20px"}
                      height={"20px"}
                      style={{ transition: "fill 0.3s", fontSize: "12px" }}
                      fill={
                        activeLink ? chakraUiTheme.colors.activeGreen : "black"
                      }
                    />
                    {title}
                  </Link>
                </Box>
              );
            })}
            <ProfileDetail
              isMobile
              isProfileButtonClicked={isProfileButtonClicked}
              setIsProfileButtonClicked={setIsProfileButtonClicked}
            />
          </Box>
        </Flex>
      </Flex>
    );
  }

  return <></>;
};

export default Footerbar;
