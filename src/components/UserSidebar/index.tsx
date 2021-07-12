import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMenu, FiStar } from 'react-icons/fi';
import { BsImage } from 'react-icons/bs';

import { Container, Header, Title, NavContent } from './styles';

import logoImg from '../../assets/logoImg.png';

const UserSidebar: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="" />

        <Title>Little Lifes</Title>
      </Header>

      <NavContent>
        <Link to="/dashboard">
          <FiMenu size={16} />
          Menu
        </Link>

        <Link to="/profile">
          <FiUser size={16} />
          Meu perfil
        </Link>

        <Link to="/my-posts">
          <FiStar size={16} />
          Meus posts
        </Link>

        <Link to="/create-post">
          <BsImage size={16} />
          Novo post
        </Link>
      </NavContent>
    </Container>
  );
};

export default UserSidebar;
