import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  NewPost,
  UploadFile,
  AddFileButton,
  SubmitFileButton,
  ImagePreview,
} from './styles';

import { useToast } from '../../hooks/toast';
import UserSidebar from '../../components/UserSidebar';

import cat from '../../assets/cat.png';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState<File | string>('');
  const [url, setUrl] = useState('');

  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    if (url) {
      fetch('/createpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
          title,
          body,
          photo: url,
        }),
      })
        .then(res => res.json())
        .then(dta => {
          if (dta.err) {
            addToast({
              type: 'error',
              title: 'Erro ao criar post',
              description: 'Ocorreu um erro ao criar postagem',
            });
          } else {
            addToast({
              type: 'success',
              title: 'Postado com sucesso',
            });

            history.push('/dashboard');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [url, addToast, body, title, history]);

  const postDetails = () => {
    const data = new FormData();

    data.append('file', image);
    data.append('upload_preset', 'little-lifes');
    data.append('cloud_name', 'felipebiga');

    fetch('https://api.cloudinary.com/v1_1/felipebiga/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(dta => {
        setUrl(dta.url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <UserSidebar />

      <Content>
        <NewPost>
          <input
            type="text"
            className="title-description"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="title-description"
            placeholder="Descrição"
            value={body}
            onChange={e => setBody(e.target.value)}
          />

          <UploadFile>
            <AddFileButton>
              <label htmlFor="file">
                Carregar Imagem
                <input
                  type="file"
                  id="file"
                  onChange={e => setImage(e.target.files![0])}
                />
              </label>
            </AddFileButton>

            {/* <ImagePreview>
              <img src={cat} alt="" />
            </ImagePreview> */}
          </UploadFile>

          <SubmitFileButton onClick={() => postDetails()}>
            Realizar postagem
          </SubmitFileButton>
        </NewPost>
      </Content>
    </Container>
  );
};

export default CreatePost;
