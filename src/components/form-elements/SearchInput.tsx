import React, {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  useState,
} from "react";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import SearchIcon from "../icons/SearchIcon";
import { chakraUiTheme } from "@/utils/theme";

interface Props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}

const SearchInput: FC<Props> = ({
  onChange,
  value,
  onFocus,
  onBlur,
  placeholder,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <Flex alignItems={"center"} gap={"16px"} position={"relative"}>
      <SearchIcon
        style={{
          width: "22px",
          height: "22px",
          position: "absolute",
          left: "34px",
          top: "12px",
          zIndex: 10,
          fill: isInputFocused ? chakraUiTheme.colors.activeGreen : "black",
          transition: "fill 0.3s",
        }}
      />
      <Input
        margin={"0px 20px"}
        paddingLeft={"42px"}
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
    </Flex>
  );
};

export default SearchInput;
