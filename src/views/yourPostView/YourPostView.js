import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          {posts?.map((post, index) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              published={post.published}
              timeout={300 * (index + 1)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default YourPostView;
