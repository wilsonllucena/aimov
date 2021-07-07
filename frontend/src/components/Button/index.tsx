import React, { ButtonHTMLAttributes } from 'react';

// import { Container } from './styles';
type ButtonProperts = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}

const Button: React.FC<ButtonProperts> = ({children, loading, ...rest}) => {

  return <button type='button' {...rest}>{children}</button>
}

export default Button;
