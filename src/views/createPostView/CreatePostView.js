import React from 'react';
import PostForm from '../../components/posts/PostForm';
import './CreatePostView.css';

function CreatePostView() {
  return (
    <div className='createPost'>
      <h1>Create a new post</h1>
      <PostForm />
    </div>
  );
}

export default CreatePostView;
