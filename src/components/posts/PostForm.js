import { Button, CircularProgress, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../redux/post/postSlice';
import './PostForm.css';

function PostForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.post);
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
    userId: user.id,
  });
  const [canSubmit, setCanSubmit] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost(post));

    setPost({
      title: '',
      content: '',
      image: '',
    });
    if (status === 'succeeded') {
      history.push('/');
    }
  };

  useEffect(() => {
    console.log('useEffect');
    if (post.title && post.content && post.image) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [post]);

  return (
    <form className='postForm' onSubmit={handleSubmit}>
      {status === 'loading' ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            onChange={handleChange}
            style={{ margin: 10, maxWidth: 400, width: '100%' }}
            label='Title'
            type='text'
            variant='outlined'
            name='title'
            value={post.title}
          />
          <TextField
            onChange={handleChange}
            style={{ margin: 10, maxWidth: 400, width: '100%' }}
            label='Image Url'
            type='text'
            variant='outlined'
            name='image'
            value={post.image}
          />
          <TextField
            onChange={handleChange}
            style={{ margin: 10, width: '100%', maxWidth: 800 }}
            id='outlined-multiline-static'
            label='Story'
            multiline
            rows={20}
            variant='outlined'
            name='content'
            value={post.content}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={canSubmit ? false : true}
          >
            Add New Post
          </Button>
        </>
      )}
    </form>
  );
}

export default PostForm;
