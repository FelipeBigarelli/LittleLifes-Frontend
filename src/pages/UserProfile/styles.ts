import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  background: #dce6ff;

  max-height: 100vh;

  overflow: hidden;
  padding: 64px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 40px;
  border: 2px solid;
  border-color: rgba(255, 255, 255, 0.8);

  padding: 32px 64px;
  margin-bottom: 32px;

  transition: border-color 0.2s;

  &:hover {
    border-color: #ff9000;
  }

  img {
    height: 160px;
    width: 160px;

    border-radius: 50%;
    border: 2px solid #fff;
    transition: border-color 0.2s;

    margin-right: 64px;

    &:hover {
      border-color: #ff9000;
    }
  }
`;

export const ProfileContent = styled.div`
  flex: 1;

  h2 {
    font-size: 32px;
    padding-bottom: 16px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ProfilePosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 70%;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 40px;

  & > img {
    padding: 24px 0;
  }

  img {
    width: 30%;
  }
`;
