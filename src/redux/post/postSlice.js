import { PostAdd } from '@material-ui/icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  posts: [],
  post: {},
  status: 'idle',
  error: null,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data } = await axios.get('/api/Post');
  return data;
});

export const getPost = createAsyncThunk('posts/getPost', async (id) => {
  const { data } = await axios.get(`/api/Post/${id}`);
  return data;
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const { data } = await axios.post('/api/Post', post);
  return data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [getPost.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPost.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;
