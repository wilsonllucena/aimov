import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	Collapse,
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
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Pagination } from "../../../components/Pagination";
import { Link,useParams } from "react-router-dom";
import api from "../../../services/apiClient";
import { Form } from "@unform/web";
import ImageInput from "../../../components/ImageInput";
import { FiFile } from "react-icons/fi";
import { FormHandles } from "@unform/core";

interface ProprietarioData {
	id?: number;
	nome: string;
    documento: string;
    email: string;
    telefone: string;
    id_imovel: number;
}
interface ParamsData {
	id: string;
}

const ProprietarioListagem: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const toast = useToast();
	const [proprietarios, setProprietarios] = useState<ProprietarioData[]>([]);
	const params = useParams<ParamsData>();
	const { isOpen, onToggle, onClose } = useDisclosure();



	useEffect(() => {
        // api.get(`/imovel/${params.id}/proprietarios`)
        // .then((response) => {
        //     setProprietarios(response.data);
        // })
        // .catch((error) => console.log(error));
        setProprietarios([{
            id: 1,
            nome: "João",
            documento: "123456789",
            email: "joao@email.com",
            telefone: "99999-9999",
            id_imovel: 1
        }]);
	}, []);

	const handleSubmit = useCallback(async (data) => {
		try {
		
            data.documento = data.documento.replace(/[^\d]/g, "");
           
            await api.post('/imoveis/create', data);
			toast({
				title: "Cadastro",
				description: "Cadastro relaizado com sucesso.",
				status: "success",
				position: "top-right",
				duration: 9000,
				isClosable: true,
			});
			onClose();
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
	}, [params.id]);

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
								<Th>Nome</Th>
                                <Th>E-mail</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{proprietarios.map((proprietario) => (
								<Tr key={proprietario.id}>
								    <Td>{proprietario.nome}</Td>
                                    <Td>{proprietario.email}</Td>

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

export default ProprietarioListagem;
