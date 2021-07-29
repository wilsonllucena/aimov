import React, {
	ChangeEvent,
	useRef,
	useEffect,
	useCallback,
	useState,
} from "react";
import { useField } from "@unform/core";
import {
	Input,
	FormControl,
	InputGroup,
	InputLeftElement,
	Icon,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
interface Props extends ChakraInputProps {
	name: string;
}
type InputProps = JSX.IntrinsicElements["input"] & Props;
export default function ImageInput({ name, ...rest }: InputProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const { fieldName, registerField, defaultValue } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "files[0]",
		});
	}, [fieldName, registerField]);
	return (
		<>
			<FormControl isRequired>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={FiFile} />}
					/>
					<Input
						ref={inputRef}
						name={name}
						placeholder={"Selecione uma imagem..."}
						value={defaultValue}
						type="file"
						{...rest}
					/>
				</InputGroup>
			</FormControl>
		</>
	);
}
