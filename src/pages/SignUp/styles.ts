import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/signup-background3.png';

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

    border-radius: 32px 8px 32px 8px;
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
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
