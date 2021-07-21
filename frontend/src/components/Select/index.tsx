import React, { useRef, useEffect } from 'react';
import {FormLabel, FormControl, Select as ChakraSelect, SelectProps as ChakraProps, SelectFieldProps } from "@chakra-ui/react"
import { useField } from '@unform/core';

interface Props extends ChakraProps {
  name: string;
  label?: string;
}

export default function Select({ name, label, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.multiple) {
          if (!ref.value) {
            return [];
          }
          return ref.value.map((option: ChakraProps) => option.value);
        }
        if (!ref.value) {
          return '';
        }
        return ref.value;
      },
    });
  }, [fieldName, registerField, rest]);

  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <ChakraSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="select-chakra"
      name={name}
      id={name}
      focusBorderColor="cyan.500"
      bgColor="gray.900"
      size="md"
      fontSize="md"
      variant="filled"
      _hover={{ bgColor: "gray.900" }}
      {...rest}
    />
    </FormControl>
  );
};