import { Box, Flex, Image, useBreakpoint } from "@chakra-ui/react";
import React, { FC, useEffect, useMemo } from "react";
import SiliderButton from "./SiliderButton";
import { useSliderContext } from "@/contexts/useSliderContext";
import { breakpointsValues } from "@/utils/enums";

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
    };
  };
}
const CampaignsSide: FC<Props> = ({ response }) => {
  const {
    sliderTranslateXValue,
    setSliderTranslateXValue,
    sliderResponsiveDraggableValue,
  } = useSliderContext();
  const currentBreakpointValue = useBreakpoint();

  const dataLength = useMemo(
    () => response?.data?.slider?.length,
    [response?.data?.slider?.length]
  );

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setSliderTranslateXValue((prev) => {
        const rightMovementMaxValue =
          currentBreakpointValue === breakpointsValues.Md ||
          currentBreakpointValue === breakpointsValues.Sm ||
          currentBreakpointValue === breakpointsValues.Base
            ? prev === -sliderResponsiveDraggableValue * (dataLength - 1)
            : prev === -sliderResponsiveDraggableValue * (dataLength - 2);
        if (rightMovementMaxValue) {
          return 0;
        }
        return prev - sliderResponsiveDraggableValue;
      });
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [
    currentBreakpointValue,
    dataLength,
    setSliderTranslateXValue,
    sliderResponsiveDraggableValue,
  ]);

  return (
    <Box position={"relative"}>
      <Flex
        gap={"16px"}
        userSelect={"none"}
        margin={"10px 20px"}
        overflow={"hidden"}
      >
        {response?.data?.slider?.map((slider) => {
          return (
            <Box
              key={slider.id}
              backgroundColor={"gray.100"}
              borderRadius={"20px"}
              padding={{
                base: "12px",
                sm: "12px",
                md: "16px 20px",
              }}
              transform={`translateX(${sliderTranslateXValue}px)`}
              transition={"transform 0.3s"}
            >
              <Image
                minWidth={{
                  base: "220px",
                  sm: "420px",
                  md: "540px",
                  lg: "400px",
                  xl: "400px",
                  "2xl": "530px",
                }}
                maxWidth={{
                  base: "220px",
                  sm: "420px",
                  md: "540px",
                  lg: "400px",
                  xl: "400px",
                  "2xl": "530px",
                }}
                minHeight={{
                  base: "160px",
                  sm: "220px",
                  md: "240px",
                  lg: "220px",
                  xl: "220px",
                  "2xl": "250px",
                }}
                maxHeight={{
                  base: "160px",
                  sm: "220px",
                  md: "240px",
                  lg: "220px",
                  xl: "220px",
                  "2xl": "250px",
                }}
                borderRadius={"20px"}
                draggable={false}
                src={slider.url}
                alt={slider.id}
              />
            </Box>
          );
        })}
        <SiliderButton
          buttonDirection={"left"}
          dataLength={response?.data?.slider?.length}
        />
        <SiliderButton
          buttonDirection={"right"}
          dataLength={response?.data?.slider?.length}
        />
      </Flex>
    </Box>
  );
};

export default CampaignsSide;
