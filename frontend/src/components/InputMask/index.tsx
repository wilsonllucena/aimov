import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputProps
} from "@chakra-ui/react";
import { useField } from "@unform/core";
import ReactInputMask from "react-input-mask";

interface Props extends InputProps {
  name: string;
  mask: string;
  label?: string;
}
const InputMask: React.FC<Props> = ({
  name,
  mask,
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    setFieldValue(defaultValue);
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue("");
      }
    });
  }, [fieldName, defaultValue, registerField]);

  return (
    <FormControl>
        			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        as={ReactInputMask}
        name={name}
        focusBorderColor="cyan.500"
        bgColor="gray.900"
        value={fieldValue}
        size="md"
        fontSize="md"
        mask={mask}
        onChange={(e) => setFieldValue(e.target.value)}
        ref={inputRef}
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        {...rest}
      />
    </FormControl>
  );
};

export { InputMask };
