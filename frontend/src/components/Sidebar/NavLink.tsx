import React, {ElementType} from 'react';
import { Text, Link as ChakraLink, Icon , LinkProps as ChakraLinkProps} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink'
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType,
  children: string,
  href: string
}
const NavLink: React.FC<NavLinkProps> = ({icon, children, href, ...rest}) => {
  return (
    <ActiveLink to={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize={20} ></Icon>
        <Text ml={4} fontSize="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>

  );
}

export default NavLink;