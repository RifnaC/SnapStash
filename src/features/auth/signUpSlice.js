import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('auth/registerUser', 
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3001/api/users/register', userData);
            return response.data;
        } catch (err) {
            if (err.response && err.response.data.message) {
                return rejectWithValue(err.response.data.message);
            } else {
                return rejectWithValue( err.message );
            }
        }
        
    }
);

const signUpSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
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
        state.error = action.payload.error;
      });
  },
});

export default signUpSlice.reducer;
