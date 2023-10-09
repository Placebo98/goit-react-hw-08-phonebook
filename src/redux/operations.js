import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://65107af83ce5d181df5d4901.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const BASE_URL = 'https://connections-api.herokuapp.com';

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
