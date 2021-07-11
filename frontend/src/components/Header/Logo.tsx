import React from 'react';
import {Text} from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Text fontSize={["2xl" , "3xl" ]}fontWeight="bold" letterSpacing="tight" w="64">
    AIMOV
    <Text as="span" ml="1" color="cyan.500">.</Text>
  </Text>
  );
}

export default Logo;