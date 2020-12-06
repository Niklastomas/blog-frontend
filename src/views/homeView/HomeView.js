import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/posts/Post';
import './HomeView.css';
import axios from '../../utils/axios';

function HomeView() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get('/api/Post');
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className='home'>
      <h1>Posts</h1>
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
    </div>
  );
}

export default HomeView;
