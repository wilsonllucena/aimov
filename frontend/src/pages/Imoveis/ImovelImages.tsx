import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	Collapse,
	Image,
	Tooltip,
	useDisclosure,
	useToast,
	VStack,
} from "@chakra-ui/react";
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
import { RiAddLine, RiDeleteBinLine, RiEyeLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useParams } from "react-router-dom";
import api from "../../services/apiClient";
import { Form } from "@unform/web";
import ImageInput from "../../components/ImageInput";
import { FiFile } from "react-icons/fi";
import { FormHandles } from "@unform/core";

interface ImovelImage {
	id?: number;
	nome: string;
	file: string;
	image_url: string;
}
interface ParamsData {
	id: string;
}

const ImovelImages: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const toast = useToast();
	const [images, setImages] = useState<ImovelImage[]>([]);
	const params = useParams<ParamsData>();
	const { isOpen, onToggle, onClose } = useDisclosure();

	const carregaImagens = useCallback(() => {
		api.get(`/imovel/${params.id}/imagens`)
			.then((response) => {
				setImages(response.data);
			})
			.catch((error) => console.log(error));
	}, [params.id]);

	useEffect(() => {
		carregaImagens();
	}, [carregaImagens]);

	const handleSubmit = useCallback(async (files) => {
		try {
			const { file } = files;
			const data = new FormData();
			data.append("file", file);
			await api.post(`/imovel/${params.id}/imagens`, data);
			toast({
				title: "Cadastro",
				description: "Cadastro relaizado com sucesso.",
				status: "success",
				position: "top-right",
				duration: 9000,
				isClosable: true,
			});
			onClose();
			carregaImagens();
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
	}, [carregaImagens, onClose, toast, params.id]);

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
						<Button
							onClick={onToggle}
							as="a"
							size="sm"
							fontSize="sm"
							colorScheme="cyan"
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
						>
							Novo arquivo
						</Button>
					</Flex>
					<Collapse in={isOpen} animateOpacity>
						<Box
							p="40px"
							color="white"
							mt="4"
							bg="black.500"
							rounded="md"
							shadow="md"
						>
							<Form ref={formRef} onSubmit={handleSubmit}>
								<VStack spacing="1">
									<ImageInput name="file" multiple />
									<Flex pt="2">
										<Button
											type="submit"
											color="green"
											leftIcon={<Icon as={FiFile} />}
										>
											Salvar
										</Button>
									</Flex>
								</VStack>
							</Form>
						</Box>
					</Collapse>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th>Imagem</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{images.map((image) => (
								<Tr key={image.id}>
									<Td>
										<Box size="sm">
											<Image
												objectFit="cover"
												boxSize="50px"
												src={image.image_url}
												alt={image.nome}
											/>
										</Box>
									</Td>

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
