import React, { useCallback, useRef } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "@chakra-ui/react";
import Button from "../../components/Button";
import { InputCPF } from "../../components/InputMask/InputCPF";
interface SignInFormData {
	username: string;
	password: string;
}
const Login: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const history = useHistory();
	const { signIn } = useAuth();
    const toast = useToast()

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			// Validando
			try {
				//   formRef.current?.setErrors({});
				//   const schema = Yup.object().shape({
				//     username: Yup.string()
				//       .required('E-mail obrigatório'),
				//     password: Yup.string().required('Senha obrigatória'),
				//   });
				//   await schema.validate(data, {
				//     abortEarly: false,
				//   });

                const {username, password } = data;
				await signIn({
					username: username.replace(/[^\d]+/g,""),
					password
				});

				history.push("/admin");
			} catch (err) {
				//   if (err instanceof Yup.ValidationError) {
				//     const errors = getValidationErrors(err);
				//     formRef.current?.setErrors(errors);
				//     return;
				//   }

				toast({
					title: "Erro na autenticação",
                    description: "Ops não foi possivel autenticar.",
                    status: "error",
                    position: "top-right",
                    duration: 9000,
                    isClosable: true,
					// description: 'Ocorreu um error ao fazer login',
				});
				return;
			}
		},
		[signIn, toast, history]
	);
	return (
		<Form ref={formRef} onSubmit={handleSubmit}>
			<Flex w="100vw" h="100vh" align="center" justify="center">
				<Flex
					width="100%"
					maxWidth={360}
					bg="gray.800"
					p="8"
					borderRadius={8}
					flexDir="column"
				>
					<Stack spacing="4">
						<InputCPF name="username" type="text" label="Usuário" />
						<Input name="password" type="password" label="Senha" />
					</Stack>
					<Button type="submit">Entrar</Button>
				</Flex>
			</Flex>
		</Form>
	);
};

export default Login;
