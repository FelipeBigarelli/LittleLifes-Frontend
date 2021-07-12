import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import UserSidebar from '../../components/UserSidebar';

import { Container, Content, Post, PostedBy, PostContent } from './styles';

import postImg from '../../assets/postImg.png';
import euImg from '../../assets/eu.png';
import catImg from '../../assets/cat.png';
import dogImg from '../../assets/dogImg.png';

const UserDashboard: React.FC = () => {
  return (
    <Container>
      <UserSidebar />

      <Content>
        <Post>
          <PostContent>
            <PostedBy>
              <a href="/profile">
                <img src={euImg} alt="" />
              </a>
              <h2>Felipe Bigarelli</h2>
            </PostedBy>

            <img src={postImg} alt="" />

            <div className="post-like">
              <h3>Title</h3>
              <FiHeart size={24} />
            </div>

            <p>Description</p>
            <input type="text" placeholder="Insira um comentário" />
          </PostContent>
        </Post>

        <Post>
          <PostContent>
            <PostedBy>
              <a href="/profile">
                <img src={euImg} alt="" />
              </a>
              <h2>Felipe Bigarelli</h2>
            </PostedBy>

            <img src={catImg} alt="" />

            <div className="post-like">
              <h3>Title</h3>
              <FaHeart size={24} />
            </div>

            <p>Description</p>
            <input type="text" placeholder="Insira um comentário" />
          </PostContent>
        </Post>

        <Post>
          <PostContent>
            <PostedBy>
              <a href="/profile">
                <img src={euImg} alt="" />
              </a>
              <h2>Felipe Bigarelli</h2>
            </PostedBy>

            <img src={dogImg} alt="" />

            <div className="post-like">
              <h3>Title</h3>
              <FaHeart size={24} />
            </div>

            <p>Description</p>
            <input type="text" placeholder="Insira um comentário" />
          </PostContent>
        </Post>
      </Content>
    </Container>
  );
};

export default UserDashboard;
