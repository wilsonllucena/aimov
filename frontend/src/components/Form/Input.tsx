import React, {InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
 const Input: React.FC<InputProps> = ({ name, ...rest }) => {
 const inputRef = useRef(null);
 const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

    return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export default Input;
