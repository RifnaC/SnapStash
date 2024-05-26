import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
      },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;

export const selectAuth = (state) => state.auth;
export default loginSlice.reducer;