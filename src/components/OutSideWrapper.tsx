import React, { FC, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const OutSideWrapper: FC<{
  children: React.ReactNode;
  handleOutSideClick: (e?: Event, ref?: HTMLDivElement) => void;
}> = ({ children, handleOutSideClick }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        wrapperRef?.current &&
        !wrapperRef?.current?.contains(event?.target as Node)
      ) {
        handleOutSideClick(event, wrapperRef?.current);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return <Box ref={wrapperRef}>{children}</Box>;
};

export default OutSideWrapper;
