import { useDispatch, useSelector } from 'react-redux';
import { ListItem, DeleteContactButton, List } from './ContactList.styled';
import { deleteContacts } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.contacts.filter(contact =>
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
