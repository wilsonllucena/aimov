import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
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
	Checkbox,
	Text,
	HStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import {
	RiAddLine,
	RiDeleteBinLine,
	RiEyeLine,
	RiImageLine,
	RiPencilLine,
} from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { Link } from "react-router-dom";
import api from "../../services/apiClient";
import "./styles.css";

interface Imovel {
	id: number;
	nome_proprietario: string;
	documento_proprietario: string;
	email_proprietario: string;
	telefone_proprietario: string;
	id_situacao_imovel?: number;
	id_autorizacao?: number;
	cep: string;
	endereco: string;
	cidade: string;
	uf: string;
	bairro: string;
	regiao: string;
	latitude?: string;
	longitude?: string;
	formatedDate: string;
	data_anuncio: Date;
	quantidade_quartos?: number;
	quantidade_suites?: number;
	tipo?: string;
	garagem: boolean;
	metragem: number;
	id_usuario_responsavel: string;
	id_usuario_ultima_alteracao: string;
	ativo: boolean;
	observacoes: string;
	created_at: Date;
}
const ImovelListagem: React.FC = () => {
	const [imoveis, setImoveis] = useState<Imovel[]>([]);

	useEffect(() => {
		api.get<Imovel[]>("/imoveis").then((response) => {
			const imovelData = response.data.map((imovel) => {
				return {
					...imovel,
					formatedDate: new Date(
						imovel.created_at
					).toLocaleDateString(),
				};
			});
			setImoveis(imovelData);
		});
	}, []);

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
							Imoveis
						</Heading>
						<Link to="/admin/imovel/cadastro">
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
								<Th>Proprietario</Th>
								<Th>Cidade</Th>
								<Th>Região</Th>
								<Th>Quantidade de Quartos</Th>
								<Th>Quantidade de Suites</Th>
								<Th>Tipo</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{imoveis.map((imovel) => (
								<Tr key={imovel.id}>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.nome_proprietario}
											</Text>
											<Text fontSize="sm">
												{imovel.email_proprietario}br
											</Text>
										</Box>
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.cidade}
											</Text>
										</Box>
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.regiao}
											</Text>
										</Box>
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.quantidade_quartos}
											</Text>
										</Box>
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.quantidade_suites}
											</Text>
										</Box>
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{imovel.tipo}
											</Text>
										</Box>
									</Td>
									{isWideVersion && (
										<Td> {imovel.formatedDate}</Td>
									)}

									<Td>
										<HStack spacing="1">
											<Tooltip
												hasArrow
												placement="top"
												label="Visualizar"
												bg="blue.600"
											>
												<Button
													as="a"
													size="sm"
													fontSize="sm"
													colorScheme="blue"
												>
													<Icon
														as={RiEyeLine}
														fontSize="18"
													/>
												</Button>
											</Tooltip>
											<Tooltip
												hasArrow
												placement="top"
												label="Imagens"
												bg="blue.600"
											>
												<Link
													to={`images/imovel/${imovel.id}`}
												>
													<Button
														as="a"
														size="sm"
														fontSize="sm"
														colorScheme="yellow"
													>
														<Icon
															as={RiImageLine}
															fontSize="18"
														/>
													</Button>
												</Link>
											</Tooltip>
											<Tooltip
												hasArrow
												placement="top"
												label="Editar"
												bg="blue.600"
											>
												<Link
													to={`imovel/${imovel.id}`}
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

export default ImovelListagem;
