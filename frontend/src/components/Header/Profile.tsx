import React from 'react';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'
import { useAuth } from '../../hooks/AuthContext';

interface ProfileProps {
  showProfileData?: boolean;
}
const Profile: React.FC<ProfileProps> = ({showProfileData}) => {
const { user } = useAuth();

  return (
    <Flex align="center">
      { showProfileData && 
        <Box mr="4" textAlign="right">
        <Text>Olá! {user.name}</Text>
        <Text color="gray.300" fontSize="small">{user.email}</Text>
      </Box>
      }

    <Avatar size="md"  name={user.full_name} src={user.avatar_url}/>
  </Flex>
  );
}

export default Profile;