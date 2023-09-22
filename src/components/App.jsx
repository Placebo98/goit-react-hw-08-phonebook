import { ContactForm } from './Form/Form';
import { Application } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Application>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Application>
  );
};
