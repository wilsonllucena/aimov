import React, { useCallback, useRef } from 'react';
import { Link , useHistory} from "react-router-dom";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from "components/Form/Input";
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

interface SignInFormData {
  username: string;
  password: string;
}
const  Login: React.FC = ()  => {

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  // Hooks criados por mim
  const { signIn } = useAuth();
  const { addToast } = useToast();



  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      // Validando
      try {
        // formRef.current?.setErrors({});
        // const schema = Yup.object().shape({
        //   email: Yup.string()
        //     .required('E-mail obrigatório')
        //     .email('Email inválido'),
        //   password: Yup.string().required('Senha obrigatória'),
        // });
        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        await signIn({
          username: data.username,
          password: data.password,
        });

        history.push('/admin');
      } catch (err) {

        // if (err instanceof Yup.ValidationError) {
        //   const errors = getValidationErrors(err);
        //   formRef.current?.setErrors(errors);
        //   return;
        // }

        addToast({
          type: 'error',
          title: 'Error na autenticação',
          description: 'Ocorreu um error ao fazer login',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    ACESSAR SISTEMA
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <Form ref={formRef} onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Usuário
                    </label>
                    <Input
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Usuário"
                      name="username"
                      type="text"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Senha
                    </label>
                    <Input
                      type="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Senha"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Entrar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            {/* <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
