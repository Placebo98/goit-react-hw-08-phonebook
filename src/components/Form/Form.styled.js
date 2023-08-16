import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  padding: 10px;
  width: 200px;
  height: 20px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 30px;
  font-size: 15px;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 16px;
  background-color: greenyellow;
`;

export const StyledErrorName = styled(ErrorMessage)`
  color: red;
`;

export const StyledErrorNumber = styled(ErrorMessage)`
  color: red;
`;
