import React, { useEffect, useRef } from "react";
import {
	FormLabel,
	FormControl,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { useField } from "@unform/core";
interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
}
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const { fieldName, defaultValue, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
		});
	}, [fieldName, registerField]);

	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				name={name}
				id={name}
				focusBorderColor="cyan.500"
				bgColor="gray.900"
				size="md"
                fontSize="md"
				defaultValue={defaultValue}
				ref={inputRef}
				variant="filled"
				_hover={{ bgColor: "gray.900" }}
				{...rest}
			/>
		</FormControl>
	);
};

export { Input };
