import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const mySlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContacts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message;
      })
      .addCase(getAllContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      }),
});

export const contactsReducer = mySlice.reducer;
export const { addContact, deleteContacts } = mySlice.actions;
