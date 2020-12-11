import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfileView.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Button, TextField } from '@material-ui/core';

function UserProfileView() {
  const { user } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <div className='userProfile'>
      <div className='userProfile__column'>
        <div className='userProfile__row'>
          <PersonOutlineIcon style={{ padding: 10 }} />
          <h3>{user.username}</h3>
        </div>
        <div className='userProfile__row'>
          <MailOutlineIcon style={{ padding: 10 }} />
          <h3>{user.email}</h3>
        </div>
        <hr />
        <div className='userProfile__row'>
          <LockOpenIcon style={{ padding: 10 }} />
          <h3>Change Password</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            type='password'
            style={{ width: '100%', backgroundColor: 'white' }}
            label='New Password'
            variant='outlined'
          />
          <TextField
            required
            type='password'
            style={{ width: '100%', marginTop: 10, backgroundColor: 'white' }}
            label='Comfirm New Password'
            variant='outlined'
          />
          <Button
            type='submit'
            style={{ marginTop: 10 }}
            variant='contained'
            color='primary'
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UserProfileView;
