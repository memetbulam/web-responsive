import React, { ChangeEventHandler, FC } from "react";
import { Input, InputProps } from "@chakra-ui/react";
import { InputTypes } from "@/utils/enums";

interface Props {
  placeholder?: string;
  value?: string;
  type?: InputTypes;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  inputProps?: InputProps;
  required?: boolean;
}

const DefaultInput: FC<Props> = ({
  placeholder,
  value,
  type,
  onChange,
  inputProps,
  required = false,
}) => {
  return (
    <Input
      placeholder={placeholder}
      required={required}
      value={value}
      type={type}
      onChange={onChange}
      {...inputProps}
    />
  );
};

export default DefaultInput;
