import React, { useCallback, useRef } from "react";
import {
	Box,
	Divider,
	HStack,
	VStack,
	Flex,
	Heading,
	SimpleGrid,
    useToast
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import Select from "../../components/Select";
import api from "../../services/apiClient";
import { useAuth } from "../../hooks/AuthContext";

interface FomDataRequest {
	nome_proprietario: string;
	documento_proprietario: string;
	email_proprietario: string;
	telefone_proprietario: string;
	id_situacao_imovel: number;
	id_autorizacao: number;
	cep: string;
	endereco: string;
	cidade: string;
	uf: string;
	bairro: string;
	regiao: string;
	latitude: string;
	longitude: string;
	formatedDate: string;
	data_anuncio: Date;
	quantidade_quartos: number;
	quantidade_suites: number;
	tipo: string;
	garagem: boolean;
	metragem: number;
	id_usuario_responsavel: string;
	id_usuario_ultima_alteracao: string;
	ativo: boolean;
	observacoes: string;
	created_at: Date;
}

const ImovelCreate: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
    const toast = useToast()
	const history = useHistory();

	const handleSubmit = useCallback(async (data: FomDataRequest) => {
        try {
            await api.post('/imoveis/create', data);
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
						Criar Imóvel
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
									name="nome_proprietario"
									label="Nome do proprietário"
									type="text"
								/>
								<Input
									name="documento_proprietario"
									label="CPF"
									isMask
									type="text"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="email_proprietario"
									label="E-mail"
									type="email"
								/>
								<Input
									name="telefone_proprietario"
									label="Telefone"
									type="text"
								/>
							</SimpleGrid>
							<Divider my="3" borderColor="gray.700" />
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input name="cep" type="text" label="CEP" />
								<Input
									name="endereco"
									type="text"
									label="Endereço"
								/>
								<Input
									name="bairro"
									type="text"
									label="Bairro"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="cidade"
									type="text"
									label="Cidade"
								/>
								<Input name="uf" type="text" label="UF" />
								<Input
									name="regiao"
									type="text"
									label="Região"
								/>
							</SimpleGrid>
							<SimpleGrid
								minChildWidth="240px"
								spacing={["6", "8"]}
								w="100%"
							>
								<Input
									name="quantidade_quartos"
									type="text"
									label="Quantidade de Quartos"
								/>
								<Input
									name="quantidade_suites"
									type="text"
									label="Quantidade de suites"
								/>
								<Input
									name="metragem"
									type="text"
									label="Metragem do imovel"
								/>
                                <Select name="tipo" label="Tipo de Imóvel" placeholder="Selecione um tipo">
                                    <option value="RESIDENCIA">Residência</option>
                                    <option value="COMERCIAL">Comercial</option>
                                </Select>
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

export default ImovelCreate;
