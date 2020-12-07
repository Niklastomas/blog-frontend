import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/posts/Post';
import './HomeView.css';
import axios from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/post/postSlice';
import { CircularProgress } from '@material-ui/core';

function HomeView() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.post);
  console.log(status);

  // const fetchPosts = async () => {
  //   const { data } = await axios.get('/api/Post');
  //   console.log(data);
  //   setPosts(data);
  // };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className='home'>
      {status === 'loading' ? (
        <CircularProgress color='secondary' />
      ) : (
        <>
          {posts &&
            posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                image={post.image}
                published={post.published}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default HomeView;
