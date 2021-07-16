import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
  } from 'react';
  import { FormLabel, FormControl , Input as ChakraInput , InputProps as ChakraInputProps} from "@chakra-ui/react";

  import { useField } from '@unform/core';
  
  // import Tooltip from '../Tooltip';
  
  
  /** useCallback é um forma de criar funções dentro de outras de forma que as funções internas
    não seja recriadas toda vez que a função principal for executada as filhas são criadas e aramazedas
    na memoria de forma a serem apenas acessada e não recriadas
  */
//   interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//     name: string;
//     containerStyle?: object;
//     icon: React.ComponentType<IconBaseProps>;
//   }


interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
  };
  const Input: React.FC<InputProps> = ({
    name,
    // containerStyle = {},
    // icon: Icon,
    label,
    ...rest
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    // const [isFocused, setIsFocused] = useState(false);
    // const [isFilled, setIsFilled] = useState(false);
  
    // const handleInputBlur = useCallback(() => {
    //   setIsFocused(false);
    //   setIsFilled(!!inputRef.current?.value);
    // }, []);
  
    // const handleInputFocus = useCallback(() => {
    //   setIsFocused(true);
    //   setIsFilled(!!inputRef.current?.value);
    // }, []);
    const { fieldName, defaultValue,registerField } = useField(name);
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);
  
    return (
    //   <Container
    //     style={containerStyle}
    //     isErrored={!!error}
    //     isFilled={isFilled}
    //     isFocused={isFocused}
    //   >
    //     {Icon && <Icon size={20} />}
    //     <input
    //       onFocus={handleInputFocus}
    //       onBlur={handleInputBlur}
    //       defaultValue={defaultValue}
    //       ref={inputRef}
    //       {...rest}
    //     />
  
    //     {error && (
    //       <Error title={error}>
    //         <FiAlertCircle color="#c53030" size={20} />
    //       </Error>
    //     )}
    //   </Container>
    <FormControl>
    {!! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="cyan.500"  
      bgColor="gray.900" 
      size="lg"
      defaultValue={defaultValue}
      ref={inputRef}
      variant="filled"
      _hover={{ bgColor: 'gray.900'}} 
      {...rest}
       />
    </FormControl>
    );
  };
  
  export {Input};