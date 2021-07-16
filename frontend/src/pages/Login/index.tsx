import React, { useCallback, useRef } from 'react';
import { Flex,Stack} from '@chakra-ui/react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
// import {Input} from '../../components/Form/Input'

interface SignInFormData {
    username: string;
    password: string;
  }
const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    // Hooks criados por mim
    const { signIn } = useAuth();
    const { addToast } = useToast();
    // Hooks criados por mim
  
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
  
        console.log(data);
          await signIn({
            username: data.username,
            password: data.password,
          });
  
          history.push('/admin');
        } catch (err) {
        //   if (err instanceof Yup.ValidationError) {
        //     const errors = getValidationErrors(err);
        //     formRef.current?.setErrors(errors);
        //     return;
        //   }
  
          addToast({
            type: 'error',
            title: 'Error na autenticação',
            // description: 'Ocorreu um error ao fazer login',
          });
          return;
        }
      },
      [signIn, addToast, history],
    );
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
    <Flex w="100vw" h="100vh" align="center" justify="center">
    <Flex  width="100%" maxWidth={360}  bg="gray.800" p="8"  borderRadius={8} flexDir="column">
      <Stack spacing="4">
        <Input name="username" type="text" label="Usuário" />
        <Input name="password" type="password" label="Senha" />
      </Stack>
      <Button type="submit">Entrar</Button>
    </Flex>
    </Flex>
    </Form>

  );
}

export default Login;