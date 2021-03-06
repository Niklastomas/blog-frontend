import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../../components/posts/PostForm';
import { addPost } from '../../redux/post/postSlice';
import './CreatePostView.css';
import { Backdrop, CircularProgress, Slide } from '@material-ui/core';

function CreatePostView() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.post);
  const loading = true;
  const handleSubmit = (post) => {
    dispatch(addPost(post));
  };

  return (
    <>
      {status === 'loading' && (
        <Backdrop style={{ zIndex: 1 }} open={loading}>
          <CircularProgress color='secondary' />
        </Backdrop>
      )}
      <Slide
        direction='down'
        timeout={600}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <div className='createPost'>
          <>
            <PostForm onSubmit={handleSubmit}>
              <h1>Create a new post</h1>
            </PostForm>
          </>
        </div>
      </Slide>
    </>
  );
}

export default CreatePostView;
