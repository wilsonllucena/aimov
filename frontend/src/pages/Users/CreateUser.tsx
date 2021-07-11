import React from 'react';
import {Box, Divider, HStack, VStack, Button, Flex, Heading, SimpleGrid} from '@chakra-ui/react';
import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import {Input} from '../../components/Form/Input'
import { Link } from 'react-router-dom';

interface FomDataRequest {
  name: string;
  full_name: string;
  document: string;
  email: string;
  cep: string
  address: string;
  password: string
  password_confirmation: string

}

const CreateUser: React.FC = () => {
  return (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                  <Input name="name" label="Nome" />
                  <Input name="name" label="Nome completo" />
                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                  <Input name="document" label="CPF" />
                  <Input name="email" label="E-mail" type="email"/>
                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                  <Input name="password" label="Senha" type="password"/>
                  <Input name="password_confirmation" label="Confirmação de senha" type="password"/>
                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                  <Input name="cep" label="CEP"/>
                  <Input name="address" label="Endereço"/>
                </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end"> 
              <HStack spacing="4">
                <Link to="/admin/users">
                    <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button colorScheme="cyan">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
    </Box>
  );
}

export default CreateUser;