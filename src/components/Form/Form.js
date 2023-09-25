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
import { addContact } from 'redux/contactSlice';
import { selectContacts } from 'redux/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.number().min(5).required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        const isContactExists = contacts.contacts.find(
          contact =>
            contact.name.toLowerCase() === values.name.toLowerCase() ||
            contact.number === values.number
        );

        if (isContactExists) {
          alert(`${values.name} вже в списку ваших контактів`);
        } else {
          dispatch(addContact({ id: nanoid(), ...values }));
        }

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
