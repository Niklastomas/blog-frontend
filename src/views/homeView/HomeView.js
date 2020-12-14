import React, { useEffect } from 'react';
import Post from '../../components/posts/Post';
import './HomeView.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/post/postSlice';
import { Backdrop, CircularProgress } from '@material-ui/core';

function HomeView() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {status === 'loading' ? (
        <Backdrop style={{ zIndex: 1 }} open={true}>
          <CircularProgress color='secondary' />
        </Backdrop>
      ) : (
        <div className='home'>
          <>
            {posts &&
              posts.map((post, index) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  published={post.published}
                  timeout={200 * (index + 1)}
                />
              ))}
          </>
        </div>
      )}
    </>
  );
}

export default HomeView;
