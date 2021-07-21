import React from "react";
import {
	Box,
	Flex,
	Text,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/AuthContext";

interface ProfileProps {
	showProfileData?: boolean;
}
const Profile: React.FC<ProfileProps> = ({ showProfileData }) => {
	const { user } = useAuth();
	const { signOut } = useAuth();

	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Olá! {user.name}</Text>
					<Text color="gray.300" fontSize="small">
						{user.email}
					</Text>
				</Box>
			)}
			<Menu>
				<MenuButton>
					<Avatar
						size="md"
						name={user.full_name}
						src={user.avatar_url}
					/>
				</MenuButton>
				<MenuList>
					<MenuItem onClick={signOut} color="black">Sair</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default Profile;
