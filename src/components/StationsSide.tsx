import React, { FC, useState } from "react";
import { Image, Flex, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import DraggableData from "./DraggableData";
import StarIcon from "./icons/StarIcon";
import { chakraUiTheme } from "@/utils/theme";
import CalendarIcon from "./icons/CalendarIcon";
import HeartIcon from "./icons/HeartIcon";
import { StationHoveredIconKeys } from "@/utils/enums";
import { StationHoveredIcon } from "@/utils/types";

interface Props {
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
      slider: {
        id: string;
        url: string;
      }[];
      stations: {
        title: string;
        order: number;
        station: {
          name: string;
          image: string;
          point: number;
        }[];
      }[];
    };
  };
}

const StationsSide: FC<Props> = ({ response }) => {
  const [isHoveredButton, setIsHoveredButton] = useState<StationHoveredIcon>({
    key: undefined,
    value: false,
  });
  const sortedData = response?.data?.stations?.sort(
    (a, b) => a.order - b.order
  );

  return (
    <Flex flexDirection={"column"} marginBottom={"40px"}>
      {sortedData?.map((item) => {
        return (
          <Flex flexDirection={"column"} key={item?.title}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              margin={"30px 0px 8px 0px"}
            >
              <Text fontSize={{ base: "16px", lg: "18px" }} fontWeight={"bold"}>
                {item?.title}
              </Text>
              <Text>tümünü gör</Text>
            </Flex>
            <DraggableData
              dataLength={item?.station?.length}
              innerItemWidth={320}
            >
              {item.station.map((station) => {
                return (
                  <Flex
                    key={station?.name}
                    backgroundColor={"gray.100"}
                    width={"320px"}
                    height={"140px"}
                    alignItems={"center"}
                    borderRadius={"12px"}
                    padding={"12px 20px"}
                  >
                    <Image
                      width={"100px"}
                      height={"100px"}
                      borderRadius={"12px"}
                      draggable={false}
                      userSelect={"none"}
                      src={station.image}
                      alt={station.name}
                    />
                    <Grid
                      width={"100%"}
                      templateRows={"repeat(4, 1fr)"}
                      padding={"0px 12px"}
                    >
                      <GridItem
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"flex-end"}
                        gap={"8px"}
                      >
                        {Array(5)
                          .fill("")
                          .map((_, index) => (
                            <StarIcon
                              key={index}
                              width={"16px"}
                              height={"16px"}
                              style={{ userSelect: "none" }}
                              fill={
                                index < station.point
                                  ? chakraUiTheme.colors.activeGreen
                                  : chakraUiTheme.colors.activeGray
                              }
                            />
                          ))}
                      </GridItem>
                      <GridItem fontWeight={500}>{station.name}</GridItem>
                      <GridItem>
                        <Button
                          type="button"
                          backgroundColor={"transparent"}
                          padding={"2px"}
                          height={"24px"}
                          color={"gray.500"}
                          verticalAlign={"baseline"}
                          _hover={{
                            backgroundColor: "transparent",
                            color: "activeGreen",
                          }}
                          transition={"color 0.3s"}
                          onMouseEnter={() =>
                            setIsHoveredButton({
                              key: StationHoveredIconKeys.Calendar,
                              value: true,
                            })
                          }
                          onMouseLeave={() =>
                            setIsHoveredButton({
                              key: StationHoveredIconKeys.Calendar,
                              value: false,
                            })
                          }
                        >
                          <CalendarIcon
                            width={"14px"}
                            height={"14px"}
                            fill={
                              isHoveredButton.key ===
                                StationHoveredIconKeys.Calendar &&
                              isHoveredButton.value
                                ? chakraUiTheme.colors.activeGreen
                                : chakraUiTheme.colors.activeGray
                            }
                            style={{ transition: "color 0.3s" }}
                          />
                          <Text fontSize={"14px"} marginLeft={"4px"}>
                            Randevu al
                          </Text>
                        </Button>
                      </GridItem>
                      <GridItem
                        color={"gray.500"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"8px"}
                      >
                        <Button
                          type="button"
                          backgroundColor={"transparent"}
                          padding={"2px"}
                          height={"24px"}
                          color={"gray.500"}
                          verticalAlign={"baseline"}
                          _hover={{
                            backgroundColor: "transparent",
                            color: "activeGreen",
                          }}
                          transition={"color 0.3s"}
                          onMouseEnter={() =>
                            setIsHoveredButton({
                              key: StationHoveredIconKeys.Heart,
                              value: true,
                            })
                          }
                          onMouseLeave={() =>
                            setIsHoveredButton({
                              key: StationHoveredIconKeys.Heart,
                              value: false,
                            })
                          }
                        >
                          <HeartIcon
                            width={"14px"}
                            height={"14px"}
                            fill={
                              isHoveredButton.key ===
                                StationHoveredIconKeys.Heart &&
                              isHoveredButton.value
                                ? chakraUiTheme.colors.activeGreen
                                : chakraUiTheme.colors.activeGray
                            }
                            style={{ transition: "color 0.3s" }}
                          />
                          <Text fontSize={"14px"} marginLeft={"4px"}>
                            Favorilere ekle
                          </Text>
                        </Button>
                      </GridItem>
                    </Grid>
                  </Flex>
                );
              })}
            </DraggableData>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default StationsSide;
