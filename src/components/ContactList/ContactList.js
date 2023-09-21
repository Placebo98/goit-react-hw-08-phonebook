import { useDispatch, useSelector } from 'react-redux';
import { ListItem, DeleteContactButton, List } from './ContactList.styled';
import { deleteContacts } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.contacts.map(contact => (
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
