import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  list-style: none;
`;

export const DeleteContactButton = styled.button`
  outline: none;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 20px;
  font-size: 15px;
  margin-left: 10px;
  background-color: red;
`;
