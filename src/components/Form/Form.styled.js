import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
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

export const Inputbox = styled.div`
  position: relative;
  margin: 30px 0;
  max-width: 310px;
  border-bottom: 2px solid #fff;
`;

export const FormLabel = styled.label`
  font-size: 25px;
  margin-bottom: 10px;
  color: white;
`;

export const FormInput = styled(Field)`
  width: 100%;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 35px 0 5px;
  color: #fff;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(255, 255, 255, 1);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin: 20px 0 20px;
  transition: all 0.4s ease;
  &:hover {
    background-color: gold;
  }
`;

export const StyledErrorName = styled(ErrorMessage)`
  color: red;
`;

export const StyledErrorNumber = styled(ErrorMessage)`
  color: red;
`;
export const Title = styled.h2`
  color: gold;
`;
