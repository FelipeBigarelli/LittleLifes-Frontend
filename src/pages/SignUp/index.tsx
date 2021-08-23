import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import catEar from '../../assets/catEar.png';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const PostData = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      )
    ) {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description:
          'Ocorreu um erro ao cadastrar usuário, cheque as credenciais',
      });
    } else {
      fetch('/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
          email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.err) {
            addToast({
              type: 'error',
              title: 'Erro no cadastro',
              description:
                'Ocorreu um erro ao cadastrar usuário, cheque as credenciais',
            });
          } else {
            addToast({
              type: 'success',
              title: 'Usuário cadastrado com sucesso',
            });

            history.push('/signin');
          }
        });
    }
  };

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
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
      <Background />

      <Content>
        <img src={catEar} alt="Little Lifes" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
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

          <Button type="submit" onClick={() => PostData()}>
            Cadastrar
          </Button>
        </Form>

        <Link to="/signin">
          <FiArrowLeft size={16} />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
