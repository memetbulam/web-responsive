import { chakraUiTheme } from "@/utils/theme";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useMemo, useState } from "react";

interface Props {
  searchValue: string;
  response: {
    code: number;
    data: {
      stories: {
        id: string;
        thumb: string;
        type: string;
        url: string;
      }[];
      menu: {
        id: string;
        title: string;
      }[];
    };
  };
}

const Menu: FC<Props> = ({ response, searchValue }) => {
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

  const searchedData = useMemo(() => {
    return response?.data?.menu?.filter((item) =>
      item.title.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }, [response?.data?.menu, searchValue]);

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
              href={`/${menu?.title?.replaceAll(" ", "-").toLocaleLowerCase()}`}
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
                transition: "background-color 0.3s",
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
