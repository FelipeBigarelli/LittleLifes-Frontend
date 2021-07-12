import styled from 'styled-components';

export const Container = styled.div`
  background: #dce6ff;
  display: flex;

  max-height: 100vh;

  overflow: hidden;
`;

export const Content = styled.div`
  margin: 64px;
  width: 100%;

  background: aliceblue;

  padding: 64px;
`;

export const NewPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  input.title-description {
    width: 50%;

    padding: 4px;
    margin-bottom: 16px;
    font-size: 16px;

    background: none;

    border: none;
    border-bottom: 1px solid rgba(000, 000, 000, 0.3);
  }
`;

export const UploadFile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /* padding-top: 16px; */

  width: 100%;
  height: 100%;
`;

export const AddFileButton = styled.div`
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    background: #5a78fa;
    border-radius: 16px;

    color: #fff;
    font-weight: 500;

    padding: 16px;
  }

  input {
    display: none;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    max-width: 600px;
  }
`;

export const SubmitFileButton = styled.div`
  background: #ff9000;
  border-radius: 16px;

  padding: 16px;
`;
