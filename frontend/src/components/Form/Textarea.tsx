import React, {InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}
const Textarea: React.FC<InputProps> = ({ name, ...rest }) => {
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

    return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} ></textarea>

}

export default Textarea;
