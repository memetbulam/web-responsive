import React, { FC, useMemo } from "react";
import { Box, Flex, Image, useBreakpoint, Text } from "@chakra-ui/react";
import SiliderButton from "./SiliderButton";
import { useSliderContext } from "@/contexts/useSliderContext";
import { SliderData } from "@/utils/types";
import { breakpointsValues, SliderButtonDirection } from "@/utils/enums";

interface Props {
  sliderData: SliderData[];
}
const CampaignsSide: FC<Props> = ({ sliderData }) => {
  const { currentImageIndex } = useSliderContext();
  const currentBreakpoint = useBreakpoint();
  const sliderMovementValue = useMemo(() => {
    if (
      currentBreakpoint === breakpointsValues.Base ||
      currentBreakpoint === breakpointsValues.Sm
    ) {
      return {
        transform: `translateX(-${currentImageIndex * 100}%)`,
        minWidth: "calc(100% - 16px)",
      };
    }

    return {
      transform: `translateX(-${currentImageIndex * 50}%)`,
      minWidth: "calc(50% - 16px)",
    };
  }, [currentBreakpoint, currentImageIndex]);

  return (
    <>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        fontWeight={"bold"}
        marginBottom={"8px"}
      >
        Kampanyalar
      </Text>
      <Box
        position={"relative"}
        width={"100%"}
        maxWidth={"100%"}
        margin={"auto"}
        overflow={"hidden"}
      >
        <Flex
          transition={"transform 0.5s"}
          gap={"16px"}
          transform={sliderMovementValue?.transform}
        >
          {sliderData?.map((slider, index) => {
            const firstIndex = index === 0;
            return (
              <Box
                key={slider.id}
                minWidth={sliderMovementValue?.minWidth}
                boxSizing="border-box"
                backgroundColor={"gray.100"}
                borderRadius={"20px"}
                marginLeft={firstIndex ? "8px" : "0px"}
                padding={{
                  base: "12px",
                  sm: "12px",
                  md: "16px 20px",
                }}
                transition={"transform 0.3s"}
              >
                <Image
                  borderRadius={"20px"}
                  draggable={false}
                  src={slider.url}
                  alt={slider.id}
                />
              </Box>
            );
          })}
        </Flex>
        <SiliderButton
          buttonDirection={SliderButtonDirection.Left}
          sliderDataLength={sliderData.length}
        />
        <SiliderButton
          buttonDirection={SliderButtonDirection.Right}
          sliderDataLength={sliderData.length}
        />
        <SiliderButton isMobileButton sliderDataLength={sliderData.length} />
      </Box>
    </>
  );
};

export default CampaignsSide;
