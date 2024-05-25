import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../features/auth/signUpSlice.js';

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});

export default store;