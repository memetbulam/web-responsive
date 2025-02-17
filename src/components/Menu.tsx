import React, { FC, useMemo, useState } from "react";
import Link from "next/link";
import { chakraUiTheme } from "@/utils/theme";
import { MenuData } from "@/utils/types";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  searchValue: string;
  menuData: MenuData[];
}

const Menu: FC<Props> = ({ menuData, searchValue }) => {
  const [isHovered, setIsHovered] = useState({ key: "", value: false });
  const widthAndHeightResponsiveValue = useBreakpointValue({
    base: "90px",
    sm: "90px",
    md: "110px",
    lg: "110px",
    xl: "120px",
  });
  const fontSizeResponsiveValue = useBreakpointValue({
    base: "14px",
    sm: "14px",
    md: "16px",
  });

  const searchedData = useMemo(
    () =>
      menuData?.filter((item) =>
        item.title.toLowerCase().includes(searchValue?.toLowerCase())
      ),
    [menuData, searchValue]
  );

  return (
    <Flex
      gap={"16px"}
      justifyContent={"center"}
      margin={"16px 20px 20px 20px"}
      flexWrap={"wrap"}
    >
      {searchedData?.length ? (
        searchedData.map((menu) => {
          return (
            <Link
              key={menu.id}
              href={"/"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: widthAndHeightResponsiveValue,
                height: widthAndHeightResponsiveValue,
                fontSize: fontSizeResponsiveValue,
                padding: "6px",
                borderRadius: "16px",
                textAlign: "center",
                backgroundColor:
                  isHovered.key === menu.id && isHovered.value
                    ? chakraUiTheme?.colors.mainGreen
                    : chakraUiTheme?.colors.mainGray,
                color:
                  isHovered.key === menu.id && isHovered.value
                    ? "white"
                    : "black",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={() => {
                setIsHovered({ key: menu.id, value: true });
              }}
              onMouseLeave={() => {
                setIsHovered({ key: menu.id, value: false });
              }}
            >
              {menu.title}
            </Link>
          );
        })
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"} height={"120px"}>
          Sonuç bulunamadı
        </Flex>
      )}
    </Flex>
  );
};

export default Menu;
