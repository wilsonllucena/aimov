import React, {  useEffect, useRef, useState } from "react";
import { FormLabel, FormControl, Input, InputProps } from "@chakra-ui/react";
import { useField } from "@unform/core";
import { phone } from  '../../utils/masks'

interface Props extends InputProps {
	name: string;
	label?: string;
}
const InputFone: React.FC<Props> = ({ name, label, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('')
	const { fieldName, defaultValue, registerField} = useField(name);

	useEffect(() => {
        setInputValue(defaultValue);
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
            setValue(ref: any, value: string) {
                ref.setInputValue(value);
              },
              clearValue(ref: any) {
                ref.setInputValue('');
              },
		});
	}, [fieldName, defaultValue, registerField]);

	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
		
            
            <Input 
            		value={inputValue ? phone(inputValue) : ''}
					name={name}
					focusBorderColor="cyan.500"
					bgColor="gray.900"
					size="md"
					fontSize="md"
					onChange={(event) => setInputValue(event.target.value)}
					ref={inputRef}
					variant="filled"
					_hover={{ bgColor: "gray.900" }}
					{...rest}
            />         
		</FormControl>
	);
};

export { InputFone };
