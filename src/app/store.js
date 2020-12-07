import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../redux/user/userSlice';
import postReducer from '../redux/post/postSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    post: postReducer,
  },
});
