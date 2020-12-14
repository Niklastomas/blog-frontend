import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../redux/user/userSlice';

import './RegisterView.css';

function RegisterView() {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password === confirmPassword) {
      await dispatch(register(user));

      setUser({
        username: '',
        email: '',
        password: '',
      });
      setConfirmPassword('');
    } else {
      alert('Password does not match!');
    }
  };
  return (
    <div className='register'>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <h1>Simple Blog</h1>
      {currentUser ? (
        <Redirect to='/' />
      ) : (
        <form onSubmit={handleSubmit} className='register__form'>
          <div className='register__input'>
            <TextField
              required
              fullWidth
              onChange={handleChange}
              label='Username'
              type='text'
              name='username'
              value={user.username}
            />
          </div>
          <div className='register__input'>
            <TextField
              required
              fullWidth
              onChange={handleChange}
              label='Email'
              type='email'
              name='email'
              value={user.email}
            />
          </div>
          <div className='register__input'>
            <TextField
              required
              fullWidth
              onChange={handleChange}
              label='Password'
              type='password'
              name='password'
              value={user.password}
            />
          </div>
          <div className='register__input'>
            <TextField
              required
              fullWidth
              onChange={(e) => setConfirmPassword(e.target.value)}
              label='Confirm Password'
              type='password'
              name='confirmPassword'
              value={user.confirmPassword}
            />
          </div>
          <Button
            type='submit'
            variant='contained'
            disabled={status === 'loading' ? true : false}
          >
            Register
          </Button>
          <p>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </form>
      )}
    </div>
  );
}

export default RegisterView;
