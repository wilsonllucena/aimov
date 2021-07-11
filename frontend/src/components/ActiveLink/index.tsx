import React, { cloneElement, ReactElement } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}
const ActiveLink: React.FC<ActiveLinkProps> = ({children, ...rest}) => {
  const location = useLocation();
  let isActive = false;

  if(location.pathname === rest.to){
    isActive = true;
  }

  return (
    <Link {...rest}>{cloneElement(children, {color: isActive ? 'cyan' : 'gray.50' })}</Link>
  )
}

export default ActiveLink;