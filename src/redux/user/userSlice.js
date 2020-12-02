import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk('user/login', async (user) => {
  const { data } = await axios.post('/api/Auth/login', user);
  console.log(data);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
