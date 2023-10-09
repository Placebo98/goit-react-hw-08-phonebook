import { createSlice } from '@reduxjs/toolkit';

import { getAllContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const getAllContactsPending = state => {
  state.isLoading = true;
};
const getAllContactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const getAllContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactPending = state => {
  state.isLoading = true;
};
const addContactRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactPending = state => {
  state.isLoading = true;
};
const deleteContactRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

export const mySlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllContacts.pending, getAllContactsPending)
      .addCase(getAllContacts.rejected, getAllContactsRejected)
      .addCase(getAllContacts.fulfilled, getAllContactsFulfilled)
      .addCase(addContact.pending, addContactPending)
      .addCase(addContact.rejected, addContactRejected)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(deleteContact.pending, deleteContactPending)
      .addCase(deleteContact.rejected, deleteContactRejected)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled),
});

export const contactsReducer = mySlice.reducer;
