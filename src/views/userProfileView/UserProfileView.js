import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfileView.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Button, Slide, TextField } from '@material-ui/core';
import { updatePassword, clearMessages } from '../../redux/user/userSlice';
import CustomAlert from '../../components/alerts/CustomAlert';

function UserProfileView() {
  const dispatch = useDispatch();
  const { user, success, error } = useSelector((state) => state.user);
  const [input, setInput] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password === input.confirmPassword) {
      dispatch(
        updatePassword({
          email: user.email,
          password: input.password,
        })
      );
    }
    setInput({
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <Slide direction='down' timeout={600} in={true} mountOnEnter unmountOnExit>
      <div className='userProfile'>
        {success && <CustomAlert>{success}</CustomAlert>}
        {error && <CustomAlert error>{error}</CustomAlert>}

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
              onChange={handleChange}
              required
              type='password'
              name='password'
              value={input.password}
              style={{ width: '100%', backgroundColor: 'white' }}
              label='New Password'
              variant='outlined'
            />
            <TextField
              onChange={handleChange}
              required
              type='password'
              name='confirmPassword'
              value={input.confirmPassword}
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
    </Slide>
  );
}

export default UserProfileView;
