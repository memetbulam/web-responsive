import { breakpointsValues } from "@/utils/enums";
import { getStoriesMouseMove, getStoriesTouchMove } from "@/utils/helpers";
import {
  Box,
  Flex,
  useBreakpointValue,
  Image,
  useBreakpoint,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

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
    };
  };
}

const StoriesSide: FC<Props> = ({ response }) => {
  const currentBreakpointValue = useBreakpoint();
  const storiesMaxValue = useBreakpointValue({
    base: 0,
    sm: 390,
    md: 320,
    lg: 0,
    xl: 0,
    "2xl": 0,
  });

  const storiesMobileMaxValue = useBreakpointValue({
    base: 420,
    sm: 390,
    md: 320,
    lg: 0,
    xl: 0,
    "2xl": 0,
  });

  const [storiesMoveInfo, setStoriesMoveInfo] = useState({
    isMoved: false,
    value: 0,
  });

  const [storiesMobileStartPositionX, setStoriesMobileStartPositionX] =
    useState(0);

  return (
    <Box
      marginLeft={"auto"}
      marginRight={"auto"}
      onMouseLeave={() => {
        setStoriesMoveInfo((prev) => ({ ...prev, isMoved: false }));
      }}
      onMouseDown={() => {
        setStoriesMoveInfo((prev) => ({ ...prev, isMoved: true }));
      }}
      onMouseUp={() => {
        setStoriesMoveInfo((prev) => ({ ...prev, isMoved: false }));
      }}
      onMouseMove={(e) => {
        if (
          currentBreakpointValue === breakpointsValues["2xl"] ||
          currentBreakpointValue === breakpointsValues.Xl ||
          currentBreakpointValue === breakpointsValues.Lg
        ) {
          return;
        }
        const isLeftSideMovement =
          e.movementX <= -1 && storiesMoveInfo?.isMoved;
        const isRightSideMovement =
          e.movementX >= 1 && storiesMoveInfo?.isMoved;
        return getStoriesMouseMove(
          isLeftSideMovement,
          isRightSideMovement,
          e.movementX,
          storiesMoveInfo,
          setStoriesMoveInfo,
          storiesMaxValue as number
        );
      }}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        setStoriesMobileStartPositionX(touch.clientX);
      }}
      onTouchMove={(e) => {
        if (
          currentBreakpointValue === breakpointsValues["2xl"] ||
          currentBreakpointValue === breakpointsValues.Xl ||
          currentBreakpointValue === breakpointsValues.Lg
        ) {
          return;
        }
        const touch = e.touches[0];
        const deltaX = touch.clientX - storiesMobileStartPositionX;
        return getStoriesTouchMove(
          deltaX,
          storiesMoveInfo,
          setStoriesMoveInfo,
          storiesMobileMaxValue as number
        );
      }}
    >
      <Flex
        padding={{
          base: "8px 12px",
          sm: "8px 16px",
          md: "12px 16px",
          lg: "16px 20px",
        }}
        width={"100%"}
        gap={"16px"}
        overflow={"hidden"}
        transform={`translateX(${storiesMoveInfo.value}px)`}
        userSelect={"none"}
      >
        {response.data.stories.map((story, index) => {
          return (
            <Box
              key={story.id}
              border={"4px solid gray"}
              padding={"4px"}
              borderRadius={"50%"}
            >
              <Image
                minW={{ base: "70px", sm: "90px", md: "100px", lg: "100px" }}
                maxW={{ base: "70px", sm: "90px", md: "100px", lg: "100px" }}
                minH={{ base: "70px", sm: "90px", md: "100px", lg: "100px" }}
                maxH={{ base: "70px", sm: "90px", md: "100px", lg: "100px" }}
                borderRadius={"50%"}
                src={story.url}
                draggable={"false"}
                alt={story.id}
                _hover={{ opacity: 0.7 }}
                transition={"opacity 0.3s"}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default StoriesSide;
