import React, { useRef, useEffect, useState } from "react";
import {
	FormLabel,
	FormControl,
	Select as ChakraSelect,
    SelectProps
} from "@chakra-ui/react";
import { OptionTypeBase } from 'react-select';
import { useField } from "@unform/core";

interface Props extends  SelectProps {
	name: string;
	label?: string;
}

export default function Select({ name, label, ...rest }: Props) {
	const selectRef = useRef(null);
    const [selectValue, setSelectValue] = useState('');
	const { fieldName, defaultValue, registerField } = useField(name);
	useEffect(() => {
        setSelectValue(defaultValue);
		registerField({
			name: fieldName,
			ref: selectRef.current,
			getValue: (ref: any) => {
				if (rest.multiple) {
					if (!ref.value) {
						return [];
					}
                    return ref.value.map((option: OptionTypeBase) => option.value);
				}
				if (!ref.value) {
					return "";
				}
                return ref.value;
			},
		});
	}, [fieldName, defaultValue, registerField, rest.multiple]);

	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

			<ChakraSelect
				value={selectValue ? selectValue : ""}
				ref={selectRef}
				classNamePrefix="react-select"
				name={name}
				id={name}
				focusBorderColor="cyan.500"
				bgColor="gray.900"
				size="md"
                onChange={(event) => setSelectValue(event.target.value)}
				fontSize="md"
				variant="filled"
				_hover={{ bgColor: "gray.900" }}
				{...rest}
			/>
		</FormControl>
	);
}
