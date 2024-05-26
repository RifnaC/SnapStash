
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('user/register', 
    async (userData) => {
        const response = await axios.post('http://localhost:3001/api/users/register', userData);
        return response.data;
    }
);

const signUpSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});


// const initialState = {
//   name: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// const signUpSlice = createSlice({
//   name: 'signUp',
//   initialState,
//   reducers: {
//     setName: (state, action) => {
//       state.name = action.payload;
//     },
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     setConfirmPassword: (state, action) => {
//       state.confirmPassword = action.payload;
//     },
//     resetForm: () => initialState,
//   },
// });

// export const { setName, setEmail, setPassword, setConfirmPassword, resetForm } = signUpSlice.actions;
export default signUpSlice.reducer;