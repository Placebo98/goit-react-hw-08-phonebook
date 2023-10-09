import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeContactFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = mySlice.reducer;
export const { changeContactFilter } = mySlice.actions;
