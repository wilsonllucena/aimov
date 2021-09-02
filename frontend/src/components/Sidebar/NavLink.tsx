import React, {ElementType} from 'react';
import { Text, Link,  Icon , LinkProps as ChakraLinkProps, Flex} from '@chakra-ui/react';
import ActiveLink from '../ActiveLink'
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType,
  children: string,
  href: string
}
const NavLink: React.FC<NavLinkProps> = ({icon, children, href, ...rest}) => {
  return (
      <div>
    <ActiveLink to={href}>
      <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize={20} ></Icon>
        <Text ml={4} fontSize="medium">{children}</Text>
      </Link>
    </ActiveLink>
      </div>
 

  );
}

export default NavLink;