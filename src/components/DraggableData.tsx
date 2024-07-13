import React, {
  FC,
  MouseEventHandler,
  ReactNode,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { draggableDataBetweenSpacing } from "@/utils/constants";
import { draggableDataMouseAndTouchMove } from "@/utils/helpers";
import { Flex } from "@chakra-ui/react";

interface Props {
  dataLength: number;
  innerItemWidth: number;
  children: ReactNode;
}

const DraggableData: FC<Props> = ({ children, dataLength, innerItemWidth }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [startTouchPosition, setStartTouchPosition] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const isLeftMovement = e.movementX < 0;
      const isRightMovement = e.movementX > 0;
      const maxRightDraggableValue = Math.max(
        0,
        dataLength * innerItemWidth -
          containerWidth +
          draggableDataBetweenSpacing * (dataLength - 1)
      );

      return draggableDataMouseAndTouchMove({
        isMobile: false,
        isLeftMovement,
        isRightMovement,
        setDragPosition,
        maxRightDraggableValue,
        isDragging,
        mouseMovementX: e.movementX,
      });
    },
    [containerWidth, dataLength, innerItemWidth, isDragging]
  );

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const isLeftMovement = e.touches[0].clientX < startTouchPosition;
      const isRightMovement = e.touches[0].clientX > startTouchPosition;
      const maxRightDraggableValue = Math.max(
        0,
        dataLength * innerItemWidth -
          containerWidth +
          draggableDataBetweenSpacing * (dataLength - 1)
      );

      return draggableDataMouseAndTouchMove({
        isMobile: true,
        isLeftMovement,
        isRightMovement,
        setDragPosition,
        maxRightDraggableValue,
      });
    },
    [containerWidth, dataLength, innerItemWidth, startTouchPosition]
  );

  return (
    <Flex
      ref={containerRef}
      width={"100%"}
      overflow={"hidden"}
      onMouseLeave={() => setIsDragging(false)}
    >
      <Flex
        gap={`${draggableDataBetweenSpacing}px`}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={(e) => setStartTouchPosition(e.touches[0].clientX)}
        onMouseUp={() => setIsDragging(false)}
        transform={`translateX(${dragPosition}px)`}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default DraggableData;
