import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.css';

function HomeView() {
  return (
    <div>
      <h1>HomeView</h1>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default HomeView;
