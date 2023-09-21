import React, { useEffect, useState } from 'react';

import { ContactForm } from './Form/Form';
import { Application } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  // const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // Замена componentDidMount
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // Замена componentDidUpdate
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const isContactExists = contacts.find(
  //     contact =>
  //       contact.name.toLowerCase() === newContact.name.toLowerCase() ||
  //       contact.number === newContact.number
  //   );

  //   if (isContactExists) {
  //     return alert(`${newContact.name} вже в списку ваших контактів`);
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  const changeContactFilter = newFilter => {
    setFilter(newFilter);
  };

  // const handleDelete = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <Application>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeContactFilter} />
        <ContactList />
      </div>
    </Application>
  );
};
