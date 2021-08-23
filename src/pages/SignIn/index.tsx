import React, { useRef, useCallback, useState, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { UserContext } from '../../App';

import Input from '../../components/Input';
import Button from '../../components/Button';

import dogEar from '../../assets/dogEar.png';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const { addToast } = useToast();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const PostData = () => {
    fetch('/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.err) {
          console.log('Data error');

          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao fazer login, cheque as credenciais',
          });
        } else {
          localStorage.setItem('jwt', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          dispatch({ type: 'USER', payload: data.user });

          addToast({
            type: 'success',
            title: 'Logado com sucesso',
          });

          history.push('/dashboard');
        }
      });
  };

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={dogEar} alt="Dog Ear" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />

          <Button type="submit" onClick={PostData}>
            Entrar
          </Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <Link to="/signup">
          <FiLogIn size={16} />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
