import React from 'react';

import {
  Container,
  Content,
  NewPost,
  UploadFile,
  AddFileButton,
  SubmitFileButton,
  ImagePreview,
} from './styles';

import UserSidebar from '../../components/UserSidebar';

import cat from '../../assets/cat.png';

const CreatePost: React.FC = () => {
  return (
    <Container>
      <UserSidebar />

      <Content>
        <NewPost>
          <input
            type="text"
            className="title-description"
            placeholder="Título"
          />
          <input
            type="text"
            className="title-description"
            placeholder="Descrição"
          />

          <UploadFile>
            <AddFileButton>
              <span>Carregar Imagem</span>
              <input type="file" />
            </AddFileButton>

            <ImagePreview>
              <img src={cat} alt="" />
            </ImagePreview>
          </UploadFile>

          <SubmitFileButton>Realizar postagem</SubmitFileButton>
        </NewPost>
      </Content>
    </Container>
  );
};

export default CreatePost;
