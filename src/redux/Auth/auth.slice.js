import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth.operations';

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, handleRegisterFulfilled);
  },
});
// [logIn.fulfilled](state, action) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// },
// [logOut.fulfilled](state) {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
// },
// [refreshUser.pending](state) {
//   state.isRefreshing = true;
// },
// [refreshUser.fulfilled](state, action) {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// },
// [refreshUser.rejected](state) {
//   state.isRefreshing = false;
// },

export const authReducer = authSlice.reducer;
