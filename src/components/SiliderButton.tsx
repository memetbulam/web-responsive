import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Flex, useBreakpoint } from "@chakra-ui/react";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import { chakraUiTheme } from "@/utils/theme";
import { useSliderContext } from "@/contexts/useSliderContext";
import { breakpointsValues, SliderButtonDirection } from "@/utils/enums";

interface Props {
  isMobileButton?: boolean;
  buttonDirection?: SliderButtonDirection;
  sliderDataLength: number;
}

const SiliderButton: FC<Props> = ({
  buttonDirection,
  sliderDataLength,
  isMobileButton = false,
}) => {
  const { currentImageIndex, setCurrentImageIndex } = useSliderContext();
  const currentBreakpoint = useBreakpoint();
  const [isSliderHovered, setIsSliderHovered] = useState({
    direction: "",
    value: false,
  });
  const isLeftButton = useMemo(
    () => buttonDirection === SliderButtonDirection.Left,
    [buttonDirection]
  );

  const handleNextClick = useCallback(() => {
    if (
      currentBreakpoint === breakpointsValues.Base ||
      currentBreakpoint === breakpointsValues.Sm
    ) {
      const index =
        currentImageIndex === sliderDataLength - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(index);
      return;
    }
    const index =
      currentImageIndex === sliderDataLength - 2 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  }, [
    currentBreakpoint,
    currentImageIndex,
    setCurrentImageIndex,
    sliderDataLength,
  ]);

  const handlePrevClick = useCallback(() => {
    if (
      currentBreakpoint === breakpointsValues.Base ||
      currentBreakpoint === breakpointsValues.Sm
    ) {
      const index =
        currentImageIndex === 0 ? sliderDataLength - 1 : currentImageIndex - 1;
      setCurrentImageIndex(index);
      return;
    }
    const index =
      currentImageIndex === 0 ? sliderDataLength - 2 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  }, [
    currentBreakpoint,
    currentImageIndex,
    setCurrentImageIndex,
    sliderDataLength,
  ]);

  const handleDotClick = useCallback(
    (index: number) => {
      setCurrentImageIndex(index);
    },
    [setCurrentImageIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, handleNextClick]);

  if (
    (isMobileButton && currentBreakpoint === breakpointsValues.Base) ||
    currentBreakpoint === breakpointsValues.Sm
  ) {
    return (
      <Box
        textAlign={"center"}
        position={"absolute"}
        left={"0px"}
        right={"0px"}
        bottom={"10px"}
        zIndex={10}
        userSelect={"none"}
      >
        {Array(sliderDataLength)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              height={"14px"}
              width={"14px"}
              margin={"0px 4px"}
              backgroundColor={
                currentImageIndex === index ? "activeGreen" : "activeGray"
              }
              borderRadius={"50%"}
              display={"inline-block"}
              cursor={"pointer"}
              onClick={() => handleDotClick(index)}
            />
          ))}
      </Box>
    );
  }

  return (
    <Flex
      width={"70px"}
      alignItems={"center"}
      backgroundColor={"gray.500"}
      position={"absolute"}
      left={isLeftButton ? "0px" : undefined}
      right={!isLeftButton ? "0px" : undefined}
      top={"10px"}
      bottom={"10px"}
      zIndex={10}
      transform={!isLeftButton ? "rotate(180deg)" : undefined}
      borderLeftRadius={"20px"}
      background={"transparent"}
      userSelect={"none"}
    >
      <LeftArrowIcon
        onMouseEnter={() => {
          setIsSliderHovered({
            direction: SliderButtonDirection.Left,
            value: true,
          });
        }}
        onMouseLeave={() => {
          setIsSliderHovered({
            direction: SliderButtonDirection.Left,
            value: false,
          });
        }}
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          fill:
            isSliderHovered?.direction === SliderButtonDirection.Left &&
            isSliderHovered?.value
              ? chakraUiTheme.colors.activeGreen
              : "black",
          transition: "fill 0.3s",
        }}
        onClick={
          buttonDirection === SliderButtonDirection.Left
            ? handlePrevClick
            : handleNextClick
        }
      />
    </Flex>
  );
};

export default SiliderButton;
