import React from 'react';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}
const Profile: React.FC<ProfileProps> = ({showProfileData}) => {
  return (

    <Flex align="center">
      { showProfileData && 
        <Box mr="4" textAlign="right">
        <Text>Wilson Lucena</Text>
        <Text color="gray.300" fontSize="small">wilson@imov.com.br</Text>
      </Box>
      }

    <Avatar size="md"  name="Wilson Lucena" src="https://github.com/wilsonllucena.png"/>
  </Flex>
  );
}

export default Profile;