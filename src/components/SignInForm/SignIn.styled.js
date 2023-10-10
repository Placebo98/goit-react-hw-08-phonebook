import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  position: relative;
  max-width: 400px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(55px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: gold;
  text-align: center;
`;

export const Inputbox = styled.div`
  position: relative;
  margin: 30px 0;
  max-width: 310px;
  border-bottom: 2px solid #fff;
`;

export const Label = styled.label`
  position: absolute;
  top: 5%;
  left: 5px;
  transform: translateY(-50%);
  color: white;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  &:focus {
    top: -5px;
  }
  &:valid {
    top: -5px;
  }
  &:hover {
    top: -5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 35px 0 5px;
  color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
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
