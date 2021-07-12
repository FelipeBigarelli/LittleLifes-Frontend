import React from 'react';

import UserSidebar from '../../components/UserSidebar';

import {
  Container,
  Content,
  Profile,
  ProfileContent,
  Infos,
  ProfilePosts,
} from './styles';

import myImg from '../../assets/eu.png';
import postImg from '../../assets/postImg.png';

const UserProfile: React.FC = () => {
  return (
    <Container>
      <UserSidebar />

      <Content>
        <Profile>
          <img src={myImg} alt="" />

          <ProfileContent>
            <h2>Felipe Bigarelli</h2>

            <Infos>
              <h4>35 posts</h4>
              <h4>40 followers</h4>
              <h4>35 following</h4>
            </Infos>
          </ProfileContent>
        </Profile>

        <ProfilePosts>
          <img src={postImg} alt="" />
          <img src={postImg} alt="" />
          <img src={postImg} alt="" />
          <img src={postImg} alt="" />
          <img src={postImg} alt="" />
          <img src={postImg} alt="" />
        </ProfilePosts>
      </Content>
    </Container>
  );
};

export default UserProfile;
