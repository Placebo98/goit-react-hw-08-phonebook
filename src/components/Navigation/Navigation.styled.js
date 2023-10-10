import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: white;
  transition: color 250ms linear, font-size 250ms linear;
  &:hover {
    color: red;
    font-size: 30px;
  }
`;

export const ContactLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: white;
  transition: color 250ms linear, font-size 250ms linear;
  margin-left: 20px;
  &:hover {
    color: red;
    font-size: 30px;
  }
`;
