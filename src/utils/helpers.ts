import { Dispatch, SetStateAction } from "react";
import { draggableDataMaxLeftValue } from "./constants";

export const getStoriesMouseMove = (
  isLeftSideMovement: boolean,
  isRightSideMovement: boolean,
  movementX: number,
  storiesMoveInfo: {
    isMoved: boolean;
    value: number;
  },
  setStoriesMoveInfo: Dispatch<
    SetStateAction<{
      isMoved: boolean;
      value: number;
    }>
  >,
  storiesMaxValue: number
) => {
  if (isRightSideMovement && storiesMoveInfo?.value > 0) {
    setStoriesMoveInfo({
      isMoved: true,
      value: 0,
    });
  } else if (
    isLeftSideMovement &&
    storiesMoveInfo?.value < -Number(storiesMaxValue)
  ) {
    setStoriesMoveInfo({
      isMoved: true,
      value: -Number(storiesMaxValue),
    });
  } else if (isLeftSideMovement) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: prev.value + movementX,
    }));
  } else if (isRightSideMovement) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: prev.value + movementX,
    }));
  }
};

export const getStoriesTouchMove = (
  deltaX: number,
  storiesMoveInfo: {
    isMoved: boolean;
    value: number;
  },
  setStoriesMoveInfo: Dispatch<
    SetStateAction<{
      isMoved: boolean;
      value: number;
    }>
  >,
  storiesMaxValue: number
) => {
  if (deltaX > 0 && storiesMoveInfo?.value > 0) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: 0,
    }));
  } else if (deltaX < 0 && storiesMoveInfo?.value < -Number(storiesMaxValue)) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: -Number(storiesMaxValue),
    }));
  } else if (deltaX > 0) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: prev.value + 3,
    }));
  } else if (deltaX < 0) {
    setStoriesMoveInfo((prev) => ({
      ...prev,
      value: prev.value - 3,
    }));
  }
};

export const draggableDataMouseAndTouchMove = ({
  isMobile,
  isLeftMovement,
  isRightMovement,
  setDragPosition,
  maxRightDraggableValue,
  isDragging,
  mouseMovementX,
}: {
  isMobile: boolean;
  isLeftMovement: boolean;
  isRightMovement: boolean;
  setDragPosition: Dispatch<SetStateAction<number>>;
  maxRightDraggableValue: number;
  isDragging?: boolean;
  mouseMovementX?: number;
}) => {
  if (isMobile) {
    if (isLeftMovement) {
      setDragPosition((prev) => {
        if (prev >= -maxRightDraggableValue) {
          return prev - 2;
        }
        return -maxRightDraggableValue;
      });
    } else if (isRightMovement) {
      setDragPosition((prev) => {
        if (prev < draggableDataMaxLeftValue) {
          return prev + 2;
        }
        return draggableDataMaxLeftValue;
      });
    }
  } else {
    if (isDragging && isLeftMovement && mouseMovementX) {
      setDragPosition((prev) => {
        if (prev >= -maxRightDraggableValue) {
          return prev + mouseMovementX;
        }
        return -maxRightDraggableValue;
      });
    } else if (isDragging && isRightMovement) {
      setDragPosition((prev) => {
        if (prev < draggableDataMaxLeftValue && mouseMovementX) {
          return prev + mouseMovementX;
        }
        return draggableDataMaxLeftValue;
      });
    }
  }
};
