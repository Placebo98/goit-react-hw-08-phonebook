import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  align-items: flex-end;
`;

export const ListItem = styled.li`
  font-size: 24px;
  font-weight: 500;
  list-style: none;
  color: black;
`;

export const DeleteContactButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 40px;
  background-color: rgb(255, 255, 255, 1);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  margin: 10px;
  transition: all 0.4s ease;
  &:hover {
    background-color: gold;
  }
`;
