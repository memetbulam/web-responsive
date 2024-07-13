import React, { FC } from "react";
import { Image, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import DraggableData from "./DraggableData";
import StarIcon from "./icons/StarIcon";
import { chakraUiTheme } from "@/utils/theme";
import CalendarIcon from "./icons/CalendarIcon";
import HeartIcon from "./icons/HeartIcon";

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
  const sortedData = response?.data?.stations?.sort(
    (a, b) => a.order - b.order
  );

  console.log(sortedData);
  return (
    <Flex flexDirection={"column"}>
      {sortedData?.map((item) => {
        return (
          <Flex flexDirection={"column"} key={item?.title}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text>{item?.title}</Text> <Text>tümünü gör</Text>
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
                    userSelect={"none"}
                  >
                    <Image
                      width={"100px"}
                      height={"100px"}
                      borderRadius={"12px"}
                      draggable={false}
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
                              fill={
                                index < station.point
                                  ? chakraUiTheme.colors.activeGreen
                                  : chakraUiTheme.colors.activeGray
                              }
                            />
                          ))}
                      </GridItem>
                      <GridItem fontWeight={500}>{station.name}</GridItem>
                      <GridItem
                        color={"gray.500"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"8px"}
                      >
                        <CalendarIcon
                          width={"14px"}
                          height={"14px"}
                          fill={chakraUiTheme.colors.activeGray}
                        />
                        <Text fontSize={"14px"}>Randevu al</Text>
                      </GridItem>
                      <GridItem
                        color={"gray.500"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"8px"}
                      >
                        <HeartIcon
                          width={"14px"}
                          height={"14px"}
                          fill={chakraUiTheme.colors.activeGray}
                        />
                        <Text fontSize={"14px"}>Favorilere ekle</Text>
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
