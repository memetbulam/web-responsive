import React, {
  ChangeEventHandler,
  Dispatch,
  FC,
  FocusEventHandler,
  SetStateAction,
  useState,
} from "react";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import SearchIcon from "../icons/SearchIcon";
import { chakraUiTheme } from "@/utils/theme";
import MicrophoneIcon from "../icons/MicrophoneIcon";
import MicrophoneSlashIcon from "../icons/MicrophoneSlashIcon";

interface Props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  handleMicrophoneOpenClick?: (
    setIsMicrophoneActive: Dispatch<SetStateAction<boolean>>
  ) => void;
  handleMicrophoneCloseClick?: (
    setIsMicrophoneActive: Dispatch<SetStateAction<boolean>>
  ) => void;
}

const SearchInput: FC<Props> = ({
  onChange,
  value,
  onFocus,
  onBlur,
  placeholder,
  handleMicrophoneOpenClick,
  handleMicrophoneCloseClick,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  return (
    <Flex alignItems={"center"} gap={"16px"} position={"relative"}>
      <SearchIcon
        style={{
          width: "22px",
          height: "22px",
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          fill: isInputFocused ? chakraUiTheme.colors.activeGreen : "black",
          transition: "fill 0.3s",
        }}
      />
      <Input
        paddingLeft={"42px"}
        paddingRight={"50px"}
        backgroundColor={"gray.100"}
        borderRadius={"20px"}
        value={value}
        placeholder={placeholder}
        fontSize={"18px"}
        height={"46px"}
        onChange={onChange}
        onFocus={(e) => {
          setIsInputFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={(e) => {
          setIsInputFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        _focus={{
          borderColor: "green.600",
        }}
      />
      <MicrophoneIcon
        style={{
          position: "absolute",
          right: "12px",
          borderRadius: "50%",
          backgroundColor: "white",
          padding: "8px",
          opacity: isMicrophoneActive ? 0 : 1,
          visibility: isMicrophoneActive ? "hidden" : "visible",
          width: "36px",
          height: "36px",
          zIndex: 10,
          cursor: "pointer",
          transition: "opacity 0.3s, visibility 0.3s",
        }}
        onClick={() => {
          setIsMicrophoneActive(true);
          if (handleMicrophoneOpenClick) {
            handleMicrophoneOpenClick(setIsMicrophoneActive);
          }
        }}
      />
      <MicrophoneSlashIcon
        style={{
          position: "absolute",
          right: "12px",
          borderRadius: "50%",
          backgroundColor: "white",
          padding: "8px",
          opacity: isMicrophoneActive ? 1 : 0,
          visibility: isMicrophoneActive ? "visible" : "hidden",
          width: "36px",
          height: "36px",
          zIndex: 10,
          cursor: "pointer",
          transition: "opacity 0.3s, visibility 0.3s",
        }}
        onClick={() => {
          setIsMicrophoneActive(false);
          if (handleMicrophoneCloseClick) {
            handleMicrophoneCloseClick(setIsMicrophoneActive);
          }
        }}
      />
    </Flex>
  );
};

export default SearchInput;
