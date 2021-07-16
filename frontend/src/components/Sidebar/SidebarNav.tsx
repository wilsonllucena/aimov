import React from "react";
import { Stack } from "@chakra-ui/react";
import NavSection from "../Sidebar/NavSection";
import NavLink from "../Sidebar/NavLink";
import {
	RiBuildingLine,
	RiContactsLine,
	RiDashboardLine,
	RiPolaroidLine,
} from "react-icons/ri";

const SidebarNav: React.FC = () => {
	return (
		<Stack spacing={12} align="flex-start">
			<NavSection title="GERAL">
				<NavLink href="/admin" icon={RiDashboardLine}>
					Dashboard
				</NavLink>
				<NavLink href="/admin/users" icon={RiContactsLine}>
					Usuários
				</NavLink>
				<NavLink href="#" icon={RiBuildingLine}>
					Imoveis
				</NavLink>
			</NavSection>
			<NavSection title="AUTOMAÇÂO">
				<NavLink href="/" icon={RiPolaroidLine}>
					Pontuação
				</NavLink>
			</NavSection>
		</Stack>
	);
};

export default SidebarNav;
