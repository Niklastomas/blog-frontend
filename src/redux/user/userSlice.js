import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  user: null,
  status: 'idle',
  success: '',
  error: '',
};

export const login = createAsyncThunk('user/login', async (user) => {
  const { data } = await axios.post('/api/Auth/login', user);
  console.log(data);
  return data;
});

export const register = createAsyncThunk('user/register', async (user) => {
  const { data } = await axios.post('/api/Auth/register', user);
  console.log(data);
  return data;
});

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (user) => {
    const { data } = await axios.put('/api/Auth/updatePassword', user);
    console.log(data);
    return data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
    },
    clearMessages: (state) => {
      state.success = '';
      state.error = '';
    },
  },
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
    [register.pending]: (state, action) => {
      state.status = 'loading';
    },
    [register.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updatePassword.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.success = 'Successfully changed password';
    },
    [updatePassword.rejected]: (state, action) => {
      state.error = 'Failed to change password';
    },
  },
});

export const { signOut, clearMessages } = userSlice.actions;

export default userSlice.reducer;
