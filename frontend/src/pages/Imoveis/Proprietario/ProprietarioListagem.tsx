import React, { useCallback, useEffect, useState } from "react";
import { Tooltip, useToast } from "@chakra-ui/react";
import {
	Box,
	Flex,
	Heading,
	Button,
	Icon,
	Table,
	Thead,
	Tbody,
	Th,
	Tr,
	Td,
	HStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiEyeLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Pagination } from "../../../components/Pagination";
import { Link, useParams } from "react-router-dom";
import api from "../../../services/apiClient";

interface Proprietario {
	id?: number;
	nome: string;
	documento: string;
	email: string;
	formatedDate: string;
	telefone: string;
	id_imovel: number;
	created_at: Date;
}
interface Params {
	id: string;
}

const ProprietarioListagem: React.FC = () => {
	const toast = useToast();
	const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);
	const params = useParams<Params>();

    const carregarProprietarios = useCallback(() => {
        api.get<Proprietario[]>(`/imovel/${params.id}/proprietarios`)
        .then((response) => {
            const proprietariosData = response.data.map((proprietario) => {
                return {
                    ...proprietario,
                    formatedDate: new Date(
                        proprietario.created_at
                    ).toLocaleDateString(),
                };
            });

            setProprietarios(proprietariosData);
        })
        .catch((error) => console.log(error));
    }, [params.id]);

	useEffect(() => {
		carregarProprietarios();
	}, [carregarProprietarios]);

	const handleDelete = useCallback(
		async (id) => {
			try {
				await api.delete(`/proprietario/${id}`);
                carregarProprietarios();
				toast({
					title: "Delete",
					description: "Proprietário excluido com sucesso.",
					status: "success",
					position: "top-right",
					duration: 9000,
					isClosable: true,
				});
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
		},
		[toast]
	);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Proprietarios
						</Heading>
						<Link to="proprietario/create">
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="cyan"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar novo
							</Button>
						</Link>
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th>Nome</Th>
								<Th>Documento</Th>
                                <Th>E-mail</Th>
                                <Th>Telefone</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{proprietarios.map((proprietario) => (
								<Tr key={proprietario.id}>
									<Td>{proprietario.nome}</Td>
                                    <Td>{proprietario.documento}</Td>
									<Td>{proprietario.email}</Td>
                                    <Td>{proprietario.telefone}</Td>
									{isWideVersion && (
										<Td>{proprietario.formatedDate}</Td>
									)}

									<Td>
										<HStack spacing="1">
                                            <Tooltip
												hasArrow
												placement="top"
												label="Editar"
												bg="blue.600"
											>
												<Link
													to={`proprietario/${proprietario.id}`}
												>
													<Button
														as="a"
														size="sm"
														fontSize="sm"
														colorScheme="green"
													>
														<Icon
															as={RiPencilLine}
															fontSize="18"
														/>
													</Button>
												</Link>
											</Tooltip>
											<Tooltip
												hasArrow
												placement="top"
												label="Delete"
												bg="blue.600"
											>
												<Button
													as="a"
													size="sm"
													fontSize="sm"
													colorScheme="red"
													onClick={() =>
														handleDelete(
															proprietario.id
														)
													}
												>
													<Icon
														as={RiDeleteBinLine}
														fontSize="18"
													/>
												</Button>
											</Tooltip>
										</HStack>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
};

export default ProprietarioListagem;
