import { createSlice } from '@reduxjs/toolkit';

// const addContact = createAction();
// const addContact = createAction('myValue/addContacts');
// const deleteContacts = createAction('myValue/deleteContacts');

// const myRedusers = createReducer([], {
//   [addContact]: (state, action) => state.contacts.push(action.payload),
//   [deleteContacts]: () =>
//     state.contacts.filter(contact => contact.id !== action.payload),
// });

const initialContacts = () => {
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

const mySlice = createSlice({
  name: 'contacts',
  initialState: initialContacts(),
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

console.log(mySlice);

export const contactsRedusers = mySlice.reducer;
export const { addContact, deleteContact } = mySlice.actions;
