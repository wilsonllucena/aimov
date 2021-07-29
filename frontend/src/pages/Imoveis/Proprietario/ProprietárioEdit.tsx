import React, { useCallback, useEffect, useRef, useState } from "react";
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
import api from "../../../services/apiClient";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Input } from "../../../components/Input";
import { Link, useHistory, useParams } from "react-router-dom";
import { Form } from "@unform/web";
import Button from "../../../components/Button";
import { FormHandles } from "@unform/core";
import { InputMask } from "../../../components/InputMask";
import { InputFone } from "../../../components/InputMask/InputFone";

interface FormDataRequest {
    id?: string;
	nome: string;
	documento: string;
	email: string;
	telefone: string;
}

interface ParamsData {
	id: string;
}
const ProprietarioEdit: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const [initialData, setInitialData] = useState<FormDataRequest[]>([]);
	const params = useParams<ParamsData>();
	const toast = useToast();
	const history = useHistory();

	const handleSubmit = useCallback(
		async (data: FormDataRequest) => {
			try {
				data.documento = data.documento.replace(/[^\d]/g,"");
				data.id = params.id;

				await api.put("/imovel", data);
				toast({
					title: "Atualização",
					description: "Imovel atualizado com sucesso.",
					status: "success",
					position: "top-right",
					duration: 9000,
					isClosable: true,
				});

				history.push("/admin/imoveis");
			} catch (error) {
				toast({
					title: "Erro",
					description: error,
					status: "error",
					position: "top-right",
					duration: 9000,
					isClosable: true,
				});
			}
		},
		[toast, params.id, history]
	);

	useEffect(() => {
        setInitialData([{
            nome: "João",
            documento: "123456789",
            email: "joao@email.com",
            telefone: "99999-9999"
        }])
		// api.get(`/imovel/${params.id}`)
		// 	.then((response) => {
		// 		setInitialData(response.data);
		// 	})
		// 	.catch((error) => console.log(error));
	}, [params.id]);

    return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="bold">
						Editar Proprietário
					</Heading>

					<Divider my="6" borderColor="gray.700" />
					<Form
						ref={formRef}
						initialData={initialData}
						onSubmit={handleSubmit}
					>
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
								<Link to="/admin/imoveis">
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

export default ProprietarioEdit;
