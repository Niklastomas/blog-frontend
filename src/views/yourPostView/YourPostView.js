import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostCard from '../../components/posts/PostCard';
import { getUserPost } from '../../redux/post/postSlice';
import './YourPostView.css';

function YourPostView() {
  const { posts, status } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPost(user.id));
  }, [dispatch, user]);

  return (
    <>
      {status === 'loading' ? (
        <Backdrop style={{ zIndex: 1 }} open={true}>
          <CircularProgress color='secondary' />
        </Backdrop>
      ) : (
        <div className='yourPostView'>
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              //   content={post.content}
              image={post.image}
              published={post.published}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default YourPostView;
