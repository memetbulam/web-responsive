import React, { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import EyeIcon from "../icons/EyeIcon";
import SlashEyeIcon from "../icons/SlashEyeIcon";
import { chakraUiTheme } from "@/utils/theme";
import { InputTypes } from "@/utils/enums";

interface Props {
  placeholder?: string;
  value?: string;
  type?: InputTypes;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
}

const PasswordInput: FC<Props> = ({
  placeholder,
  value,
  type,
  onChange,
  required = false,
}) => {
  const [inputType, setInputType] = useState(InputTypes.Password);

  useEffect(() => {
    if (type) {
      setInputType(type);
    }
  }, [type]);

  return (
    <Box position={"relative"}>
      <EyeIcon
        style={{
          opacity: inputType === InputTypes.Password ? 1 : 0,
          visibility: inputType === InputTypes.Password ? "visible" : "hidden",
          width: "24px",
          height: "24px",
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          fill: chakraUiTheme.colors.activeGray,
          transition: "opacity 0.3s, visibility 0.3s",
        }}
        onClick={() => setInputType(InputTypes.Text)}
      />
      <SlashEyeIcon
        style={{
          opacity: inputType === InputTypes.Text ? 1 : 0,
          visibility: inputType === InputTypes.Text ? "visible" : "hidden",
          width: "24px",
          height: "24px",
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          fill: chakraUiTheme.colors.activeGray,
          transition: "opacity 0.3s, visibility 0.3s",
        }}
        onClick={() => setInputType(InputTypes.Password)}
      />
      <Input
        paddingRight={"40px"}
        value={value}
        required={required}
        placeholder={placeholder}
        type={inputType}
        onChange={onChange}
      />
    </Box>
  );
};

export default PasswordInput;
