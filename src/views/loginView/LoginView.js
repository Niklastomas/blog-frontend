import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/userSlice';
import './LoginView.css';

function LoginView() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

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
    console.log(user);
    await dispatch(login(user));
  };
  return (
    <div className='login'>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <h1>Simple Blog</h1>
      <form onSubmit={handleSubmit} className='login__form'>
        <div className='login__input'>
          <TextField
            fullWidth
            onChange={handleChange}
            label='Email'
            type='email'
            name='email'
            value={user.email}
          />
        </div>
        <div className='login__input'>
          <TextField
            fullWidth
            onChange={handleChange}
            label='Password'
            type='password'
            name='password'
            value={user.password}
          />
        </div>
        <Button type='submit' variant='contained'>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginView;
