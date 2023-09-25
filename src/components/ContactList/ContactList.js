import { useDispatch, useSelector } from 'react-redux';
import { ListItem, DeleteContactButton, List } from './ContactList.styled';
import { deleteContacts } from 'redux/contactSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { getAllContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter.toLowerCase())
  );
  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}:{''}
          {contact.number}
          <DeleteContactButton
            onClick={() => {
              dispatch(deleteContacts(contact.id));
            }}
          >
            Delete
          </DeleteContactButton>
        </ListItem>
      ))}
    </List>
  );
};
