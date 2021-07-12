import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 400px;

  background: #65da8c;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
  width: 75%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;
    width: 80px;
  }

  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  font-size: 32px;
  text-align: center;

  padding-top: 24px;
`;

export const NavContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    height: 64px;
    width: 65%;

    display: flex;
    justify-content: left;
    align-items: center;

    font-size: 32px;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 1px black;

    transition: color 0.2s;

    svg {
      color: #f25e08;
      margin-right: 24px;
      margin-top: 4px;

      height: 24px;
      width: 24px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
