import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/user/userSlice';

function DropdownMenu() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='dropdown' onMouseLeave={() => setDisplayMenu(false)}>
      <div
        className='dropdown__icons'
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        <AccountBoxIcon />
        <ExpandMoreIcon />
      </div>

      <div
        className={displayMenu ? 'dropdown__content show' : 'dropdown__content'}
      >
        <Link to='/post/new-post'>New Post</Link>
        <Link to='/user/posts'>Your Posts</Link>
        <Link to='/user/profile'>Profile</Link>
        <Link to='/login' onClick={() => dispatch(signOut())}>
          Sign Out
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
