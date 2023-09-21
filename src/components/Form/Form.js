import React from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  FormInput,
  FormLabel,
  FormButton,
  StyledErrorName,
  StyledErrorNumber,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.number().min(5).required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  // const contacts = useSelector(state => state.contacts);
  // const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" name="name" placeholder="Tsaryk Oleg" />
        <StyledErrorName name="name" component="div" />

        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput type="tel" name="number" placeholder="380990512501" />
        <StyledErrorNumber name="name" component="div" />
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  );
};
