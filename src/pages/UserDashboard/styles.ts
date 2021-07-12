import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center; */

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* padding: 32px; */

  /* background: linear-gradient(to right, #65da8c 25%, #fff 75%); */
`;

export const Content = styled.div`
  background: #dce6ff;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */

  padding: 32px;

  height: 100%;
  max-height: 100vh;
  width: 100%;

  overflow-y: scroll;
`;

export const Post = styled.div`
  max-width: 800px;
  width: 100%;

  background: aliceblue;

  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: border 0.2s;

  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2);
  /* border: 1px solid; */
  margin: 32px auto;
  padding: 16px 0;

  &:hover {
    border-color: #ff9000;
  }

  & + & {
    margin: 64px auto;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto;

  .post-like {
    display: flex;
    justify-content: space-between;
  }

  h2,
  img,
  p {
    padding: 8px 0;
  }

  img {
    height: auto;

    width: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
    padding-top: 12px;
  }

  p {
    font-size: 16px;
    padding-bottom: 24px;
  }

  input {
    background: none;

    border-bottom: 1px solid rgba(000, 000, 000, 0.3);
    border-top: none;
    border-left: none;
    border-right: none;

    padding: 4px;

    margin-bottom: 8px;
  }

  svg {
    color: red;
    margin: 16px 0 8px 0;
  }
`;

export const PostedBy = styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
  }

  img {
    height: auto;
    width: 64px;
    border-radius: 50%;

    margin-right: 16px;
  }
`;
