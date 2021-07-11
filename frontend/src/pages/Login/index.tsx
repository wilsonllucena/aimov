import React from 'react';
import { Flex, Button, Stack} from '@chakra-ui/react';
import {Input} from '../../components/Form/Input'
const Login: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
    <Flex as="form" width="100%" maxWidth={360}  bg="gray.800" p="8"  borderRadius={8} flexDir="column">
      <Stack spacing="4">
        <Input name="username" type="text" label="Usuário" />
        <Input name="password" type="password" label="Senha" />
      </Stack>
      <Button type="submit" mt="6" colorScheme="cyan" size="lg" >Entrar</Button>
    </Flex>
    </Flex>

  );
}

export default Login;