import React from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailView.css';

function PostDetailView() {
  const { id } = useParams();
  return (
    <div>
      <h1>PostDetailView</h1>
      <h3>{id}</h3>
    </div>
  );
}

export default PostDetailView;
