import React from 'react';
import {Box, Flex, Heading, Button, Icon, Table,Thead, Tbody, Th, Tr, Td, Checkbox, Text, HStack , useBreakpointValue} from '@chakra-ui/react';
import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import {Pagination} from '../../components/Pagination';
import { Link } from 'react-router-dom';

import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

const UserList: React.FC = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>
              <Link to="/users/create">
                <Button as="a" size="sm" fontSize="sm" colorScheme="cyan" leftIcon={<Icon as={RiAddLine}  fontSize="20"/>} >Criar novo</Button>
              </Link>
            </Flex>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th  px={["4","4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="cyan"/>
                  </Th>
                  <Th>
                    Usuário
                  </Th>
                  {isWideVersion && ( <Th>
                    Data de cadastro
                  </Th>)}
                  <Th w="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4","4", "6"]}>
                  <Checkbox colorScheme="cyan" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Wilson Lucena</Text>
                      <Text fontSize="sm">wilson@imov.com.br</Text>
                    </Box>
                  </Td>
                  {isWideVersion && (<Td> 03 de Julho de 2021</Td>) }
             
                  <Td>
                    <HStack spacing="1">
                      <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiPencilLine}  fontSize="18"/>}  >Editar</Button>
                      <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine}  fontSize="18"/>}  >Delete</Button>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Pagination />
          </Box>
        </Flex>
    </Box>
  );
}

export default UserList;