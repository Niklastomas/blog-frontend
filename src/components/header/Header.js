import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/user/userSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div className='header'>
      <h1>Simple Blog </h1>
      <div className='header__user'>
        <h3>{user?.username}</h3>
        <Button onClick={handleSignOut} variant='contained'>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Header;
