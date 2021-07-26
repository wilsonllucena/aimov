import React, {  useEffect, useRef, useState } from "react";
import { FormLabel, FormControl, Input, InputProps } from "@chakra-ui/react";
import { useField } from "@unform/core";
import { cpf } from  '../../utils/masks'

interface Props extends InputProps {
	name: string;
	label?: string;
}
const InputCPF: React.FC<Props> = ({ name, label, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
    const [inputMask, setInputMask] = useState('')
	const { fieldName, defaultValue, registerField} = useField(name);

	useEffect(() => {
        setInputMask(defaultValue);
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
            		value={inputMask ? cpf(inputMask) : ''}
					name={name}
					focusBorderColor="cyan.500"
					bgColor="gray.900"
					size="md"
					fontSize="md"
					onChange={(event) => setInputMask(event.target.value)}
					ref={inputRef}
					variant="filled"
					_hover={{ bgColor: "gray.900" }}
					{...rest}
            />         
		</FormControl>
	);
};

export { InputCPF };
