import React, { useEffect, useState } from "react";
import { Image, Tooltip } from "@chakra-ui/react";
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
import { RiAddLine, RiDeleteBinLine, RiEyeLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { Link } from "react-router-dom";
import api from "../../services/apiClient";
import "./styles.css";

interface ImovelImage {
	id?: number;
	nome: string;
	file: string;
}
const ImovelImages: React.FC = () => {
	const [images, setImages] = useState<ImovelImage[]>([]);

	useEffect(() => {
		setImages([
			{
				id: 1,
				nome: "Quarto",
				file: "http://localhost:3333/api/images",
			},
		]);
		// api.get<ImovelImage[]>("/imoveis").then((response) => {
		// 	const imovelData = response.data.map((imovel) => {
		// 		return {
		// 			...imovel,
		// 			formatedDate: new Date(imovel.created_at).toLocaleDateString(),
		// 		};
		// 	});
		// 	setImoveis(imovelData);
		// });
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
							Imagens do imovél
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
								<Th>Nome</Th>
								{isWideVersion && <Th>Imagem</Th>}
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{images.map((image) => (
								<Tr key={image.id}>
									<Td>
										<Box>
											<Text fontWeight="bold">
												{image.nome}
											</Text>
										</Box>
									</Td>
									{isWideVersion && <Td>
										<Box size="sm">
											<Image
												objectFit="cover"
                                                boxSize="50px"
												src="https://www.promenade.com.br/hotel-link-stay-barra/img/galeria/acomodacoes/2016/quarto-luxo-casal/promenade-link-stay-suite-luxo-casal-7.jpg"
												alt={image.nome}
											/>
										</Box>
									</Td>}

									{isWideVersion && <Td>26/07/2021</Td>}

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

export default ImovelImages;
