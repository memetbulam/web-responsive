import { Dispatch, SetStateAction } from "react";

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
