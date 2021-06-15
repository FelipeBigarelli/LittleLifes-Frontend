import styled from 'styled-components';

export const Container = styled.div`
  background: #ecffea;
  border-radius: 10px;
  border: 2px solid #ecffea;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 16px;
    color: #ff9000;
  }
`;
