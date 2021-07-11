import React from 'react';
import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number
}

const PaginationItems: React.FC<PaginationItemProps> = ({isCurrent = false, number}) => {
  if(isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4"colorScheme="cyan" disabled _disabled={{ bgColor: 'cyan.500', cursor: 'default' }}>{number}</Button>
    )
  }
  return (
    <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{ bgColor: 'gray.500' }}>{number}</Button>

  );
}

export default PaginationItems;