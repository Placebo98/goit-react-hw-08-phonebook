import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;

  color: gold;
  height: auto;
  padding: 0 auto;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 40px;
  background-color: rgb(255, 255, 255, 1);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.4s ease;
  &:hover {
    background-color: gold;
  }
`;
