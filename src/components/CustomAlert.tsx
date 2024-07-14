import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { AlertIcon, Alert } from "@chakra-ui/react";
import { ChakraUiAlertState } from "@/utils/types";

interface Props {
  isShowAlert: ChakraUiAlertState;
  setIsShowAlert: Dispatch<SetStateAction<ChakraUiAlertState>>;
}
const CustomAlert: FC<Props> = ({ isShowAlert, setIsShowAlert }) => {
  useEffect(() => {
    if (isShowAlert?.isShowAlert) {
      setTimeout(
        () =>
          setIsShowAlert({
            isShowAlert: false,
            message: "",
            status: undefined,
          }),
        3000
      );
    }
  }, [isShowAlert, setIsShowAlert]);

  return (
    <Alert
      status={isShowAlert?.status}
      position={"fixed"}
      bottom={"30px"}
      visibility={isShowAlert?.isShowAlert ? "visible" : "hidden"}
      right={isShowAlert?.isShowAlert ? "30px" : "-300px"}
      opacity={isShowAlert?.isShowAlert ? 1 : 0}
      maxWidth={"300px"}
      borderRadius={"10px"}
      transition={"right 0.3s,visibility 0.3s, opacity 0.3s"}
    >
      <AlertIcon />
      {isShowAlert?.message}
    </Alert>
  );
};

export default CustomAlert;
