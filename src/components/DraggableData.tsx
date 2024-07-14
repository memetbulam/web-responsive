import React, {
  FC,
  MouseEventHandler,
  ReactNode,
  TouchEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  dataLength: number;
  innerItemWidth: number;
  children: ReactNode;
}

const DraggableData: FC<Props> = ({ children, dataLength, innerItemWidth }) => {
  const draggableContainerRef = useRef<HTMLDivElement>(null);
  const [isDragStart, setIsDragStart] = useState(false);
  const [dragStartPositionX, setDragStartPositionX] = useState(0);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);

  const handleDragStart: TouchEventHandler<HTMLDivElement> &
    MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (draggableContainerRef.current) {
        setIsDragStart(true);
        setDragStartPositionX(
          (event as React.MouseEvent<HTMLDivElement>).pageX ||
            (event as React.TouchEvent<HTMLDivElement>).touches[0].pageX -
              draggableContainerRef.current.offsetLeft
        );
        setScrollLeftValue(draggableContainerRef.current.scrollLeft);
      }
    },
    [draggableContainerRef]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragStart(false);
  }, []);

  const handleDragMove: TouchEventHandler<HTMLDivElement> &
    MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!isDragStart) return;
      event.preventDefault();
      if (draggableContainerRef?.current) {
        const screenPositionX =
          (event as React.MouseEvent<HTMLDivElement, MouseEvent>)?.pageX ||
          (event as React.TouchEvent<HTMLDivElement>)?.touches[0].pageX -
            draggableContainerRef.current.offsetLeft;
        const activeMovement = (screenPositionX - dragStartPositionX) * 1.2;
        draggableContainerRef.current.scrollLeft =
          scrollLeftValue - activeMovement;
      }
    },
    [dragStartPositionX, isDragStart, scrollLeftValue]
  );

  return (
    <Flex
      overflow={"hidden"}
      position={"relative"}
      ref={draggableContainerRef}
      onMouseDown={handleDragStart}
      onMouseLeave={handleDragEnd}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove as MouseEventHandler<HTMLDivElement>}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove as TouchEventHandler<HTMLDivElement>}
    >
      <Flex transition={"transform 0.3s"}>{children}</Flex>
    </Flex>
  );
};

export default DraggableData;
