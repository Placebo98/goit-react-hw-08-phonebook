import { configureStore } from '@reduxjs/toolkit';
import { contactsRedusers } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsRedusers,
    // filter: filtersRedusers,
  },
});
