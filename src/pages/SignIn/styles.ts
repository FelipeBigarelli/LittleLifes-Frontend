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
    position: relative;
    height: 240px;
    width: 240px;
    transform: rotate(-14deg);
  }

  /* img + img {
    height: 400px;
    width: 400px;
    transform: rotate(-15deg);

    position: absolute;
    top: 355px;
    left: 174px;
  } */

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    z-index: 2;

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
  background: url(${signInBackgroundImg}) no-repeat center #ffdb73;
  background-size: 100%;
`;
