import React, { cloneElement, ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
	children: ReactElement;
	exactHref?: boolean;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({
	children,
	exactHref = false,
	...rest
}) => {
	const location = useLocation();
	let isActive = false;

	if (
		exactHref &&
		(location.pathname === rest.to || location.pathname === rest.href)
	) {
		isActive = true;
	}

	if (
		!exactHref &&
		( location.pathname.startsWith(String(rest.href)) ||
        location.pathname.startsWith(String(rest.to)))
	) {
		isActive = true;
	}

	return (
		<Link {...rest}>
			{cloneElement(children, { color: isActive ? "cyan" : "gray.50" })}
		</Link>
	);
};

export default ActiveLink;
