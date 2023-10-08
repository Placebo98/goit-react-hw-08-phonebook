import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth.operations';

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogInFulfielled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogOutFulfielled = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleRefreshPending = state => {
  state.isRefreshing = true;
};
const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshRejected = state => {
  state.isRefreshing = false;
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
    builder.addCase(logIn.fulfilled, handleLogInFulfielled);
    builder.addCase(logOut.fulfilled, handleLogOutFulfielled);
    builder.addCase(refreshUser.pending, handleRefreshPending);
    builder.addCase(refreshUser.fulfilled, handleRefreshFulfilled);
    builder.addCase(refreshUser.rejected, handleRefreshRejected);
  },
});

export const authReducer = authSlice.reducer;
