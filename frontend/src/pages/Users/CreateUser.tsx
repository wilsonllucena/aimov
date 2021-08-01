import React, { useCallback, useRef } from "react";
import {
	Box,
	Divider,
	HStack,
	VStack,
	Flex,
	Heading,
	SimpleGrid,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";

interface FomDataRequest {
	name: string;
	full_name: string;
	document: string;
	email: string;
	cep: string;
	address: string;
	password: string;
}

const CreateUser: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: FomDataRequest) => {}, []);
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="bold">
						Criar usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />
					<Form ref={formRef} onSubmit={handleSubmit}>
						<VStack spacing="8">
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input name="name" label="Nome" type="text" />
								<Input
									name="full_name"
									label="Nome completo"
									type="text"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="email"
									label="E-mail"
									type="email"
								/>
								<Input
									name="document"
									label="CPF"
									type="text"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="password"
									label="Senha"
									type="password"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
                                <Input name="cep" type="text" label="CEP" />
								<Input
									name="address"
									type="text"
									label="Endereço"
								/>
							</SimpleGrid>
						</VStack>
						<Flex justify="flex-end">
							<HStack spacing="4">
								<Link to="/users">
									<Button
										size="md"
										fontSize="md"
										colorScheme="whiteAlpha"
									>
										Cancelar
									</Button>
								</Link>
								<Flex>
									<Button
										size="md"
										fontSize="md"
										type="submit"
									>
										Salvar
									</Button>
								</Flex>
							</HStack>
						</Flex>
					</Form>
				</Box>
			</Flex>
		</Box>
	);
};

export default CreateUser;
