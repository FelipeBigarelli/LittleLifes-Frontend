import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/signin-background2.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; //estica ao max
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  background: #65da8c;

  img {
    height: 240px;
    width: 240px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: #ff9000;
      height: 56px;

      border-radius: 10px;
      border: 0;

      padding: 0 16px;
      margin-top: 16px;

      color: #312e38;
      width: 100%;
      font-weight: 500;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      font-weight: 700;
      text-shadow: 0.5px 0.5px black;

      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    font-weight: 700;

    display: block;
    margin-top: 24px;
    padding: 8px;
    text-decoration: none;

    width: 240px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px 32px 8px 32px;
    background: rgb(255, 255, 255, 0.9);

    transition: background-color 0.2s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${shade(0.2, '#ECFFEA')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: 100%;
`;
