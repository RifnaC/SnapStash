
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, resetForm } = signUpSlice.actions;
export default signUpSlice.reducer;