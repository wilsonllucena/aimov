import React from 'react';
import {  Button as ChakraButton, ButtonProps as ChakraButtonProps} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <ChakraButton type="submit" mt="6" colorScheme="cyan" size="lg" {...rest} > {loading ? 'Carregando...' : children}</ChakraButton>
);

export default Button;