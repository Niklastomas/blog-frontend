import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/user/userSlice';
import DropdownMenu from '../dropdown/DropdownMenu';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Blog </h1>
      </Link>

      <div className='header__user'>
        <h3>{user?.username}</h3>
        <DropdownMenu />
        {/* <Button onClick={handleSignOut} variant='contained'>
          Sign Out
        </Button> */}
      </div>
    </div>
  );
}

export default Header;
