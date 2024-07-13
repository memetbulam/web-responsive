import { Flex, useBreakpoint } from "@chakra-ui/react";
import React, { FC, useMemo, useState } from "react";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import { chakraUiTheme } from "@/utils/theme";
import { useSliderContext } from "@/contexts/useSliderContext";
import { breakpointsValues } from "@/utils/enums";

interface Props {
  buttonDirection: string;
  dataLength: number;
}

const SiliderButton: FC<Props> = ({ buttonDirection, dataLength }) => {
  const currentBreakpointValue = useBreakpoint();
  const { setSliderTranslateXValue, sliderResponsiveDraggableValue } =
    useSliderContext();
  const [isSliderHovered, setIsSliderHovered] = useState({
    direction: "",
    value: false,
  });

  const isLeftButton = useMemo(
    () => buttonDirection === "left",
    [buttonDirection]
  );

  if (
    currentBreakpointValue === breakpointsValues.Sm ||
    currentBreakpointValue === breakpointsValues.Base
  ) {
    return (
      <Flex
        position={"absolute"}
        bottom={"32px"}
        left={"50%"}
        gap={"6px"}
        transform={"translateX(-50%)"}
        zIndex={10}
      >
        {Array(dataLength)
          .fill(0)
          .map((_, index) => {
            return (
              <Flex
                key={index}
                width={"12px"}
                height={"12px"}
                borderRadius={"50%"}
                backgroundColor={"gray.100"}
              />
            );
          })}
      </Flex>
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
      background={
        "linear-gradient(270deg, rgba(2,0,36,0) 0%, rgba(237,242,247,1) 75%)"
      }
    >
      <LeftArrowIcon
        onMouseEnter={() => {
          setIsSliderHovered({ direction: "left", value: true });
        }}
        onMouseLeave={() => {
          setIsSliderHovered({ direction: "left", value: false });
        }}
        onClick={() => {
          setSliderTranslateXValue((prev) => {
            const rightMovementMaxValue =
              currentBreakpointValue === breakpointsValues.Md ||
              currentBreakpointValue === breakpointsValues.Sm ||
              currentBreakpointValue === breakpointsValues.Base
                ? -sliderResponsiveDraggableValue * (dataLength - 2) <= prev &&
                  !isLeftButton
                : -sliderResponsiveDraggableValue * (dataLength - 3) <= prev &&
                  !isLeftButton;

            if (prev === 0 && isLeftButton) {
              return 0;
            } else if (isLeftButton) {
              return prev + sliderResponsiveDraggableValue;
            } else if (rightMovementMaxValue) {
              return prev - sliderResponsiveDraggableValue;
            } else {
              return prev;
            }
          });
        }}
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          fill:
            isSliderHovered?.direction === "left" && isSliderHovered?.value
              ? chakraUiTheme.colors.activeGreen
              : "black",
          transition: "fill 0.3s",
        }}
      />
    </Flex>
  );
};

export default SiliderButton;
