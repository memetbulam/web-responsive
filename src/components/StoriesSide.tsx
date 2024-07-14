import React, { FC } from "react";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import DraggableData from "./DraggableData";
import { StoriesData } from "@/utils/types";

interface Props {
  storiesData: StoriesData[];
}

const StoriesSide: FC<Props> = ({ storiesData }) => {
  const innerItemWidthResponsiveValue = useBreakpointValue({
    base: 106,
    sm: 116,
    md: 146,
    lg: 166,
    xl: 166,
    "2xl": 144,
  });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      padding={"30px"}
      userSelect={"none"}
    >
      <DraggableData
        dataLength={storiesData?.length}
        innerItemWidth={innerItemWidthResponsiveValue as number}
      >
        {storiesData?.map((story) => {
          return (
            <Box
              key={story.id}
              border={"4px solid gray"}
              padding={"4px"}
              borderRadius={"50%"}
            >
              <Image
                minW={{ base: "90px", sm: "100px", md: "130px", lg: "150px" }}
                maxW={{ base: "90px", sm: "100px", md: "130px", lg: "150px" }}
                minH={{ base: "90px", sm: "100px", md: "130px", lg: "150px" }}
                maxH={{ base: "90px", sm: "100px", md: "130px", lg: "150px" }}
                borderRadius={"50%"}
                src={story.url}
                draggable={false}
                alt={story.id}
                _hover={{ opacity: 0.7 }}
                transition={"opacity 0.3s"}
              />
            </Box>
          );
        })}
      </DraggableData>
    </Flex>
  );
};

export default StoriesSide;
