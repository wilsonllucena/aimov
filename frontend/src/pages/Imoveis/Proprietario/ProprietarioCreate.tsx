import React, { useCallback, useRef } from "react";
import {
	Box,
	Divider,
	HStack,
	VStack,
	Flex,
	Heading,
	SimpleGrid,
	useToast,
} from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Input } from "../../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Button from "../../../components/Button";
import { InputFone } from "../../../components/InputMask/InputFone";
import { InputMask } from "../../../components/InputMask";
import { FormHandles } from "@unform/core";
import api from "../../../services/apiClient";

interface FomDataRequest {
	nome: string;
	documento: string;
	email: string;
	telefone: string;
}

const ProprietarioCreate: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const toast = useToast();
	const history = useHistory();

	const handleSubmit = useCallback(async (data: FomDataRequest) => {
		try {
			data.documento = data.documento.replace(/[^\d]/g, "");
			await api.post("/imoveis", data);
			toast({
				title: "Cadastro",
				description: "Cadastro relaizado com sucesso.",
				status: "success",
				position: "top-right",
				duration: 9000,
				isClosable: true,
			});

			history.push("/admin/imoveis");
		} catch (error) {
			toast({
				title: "Erro",
				description: "Algo deu errado.",
				status: "error",
				position: "top-right",
				duration: 9000,
				isClosable: true,
			});
		}
	}, []);
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="bold">
						Novo Proprietário
					</Heading>

					<Divider my="6" borderColor="gray.700" />
					<Form ref={formRef} onSubmit={handleSubmit}>
						<VStack spacing="8">
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="nome"
									label="Nome do proprietário"
									type="text"
								/>
								<InputMask
									mask="***.***.***-**"
									name="documento"
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
									name="email"
									label="E-mail"
									type="email"
								/>
								<InputFone
									name="telefone"
									label="Telefone"
									type="text"
								/>
							</SimpleGrid>
						</VStack>
						<Flex justify="flex-end">
							<HStack spacing="4">
								<Link to="">
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

export default ProprietarioCreate;
