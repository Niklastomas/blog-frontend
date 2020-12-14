import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownMenu from '../dropdown/DropdownMenu';
import './Header.css';

function Header() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className='header'>
      <Link to='/'>
        <h1>Blog </h1>
      </Link>

      <div className='header__user'>
        <h3>{user?.username}</h3>
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Header;
