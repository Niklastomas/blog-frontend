import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../redux/user/userSlice';
import './LoginView.css';
import CustomAlert from '../../components/alerts/CustomAlert';
function LoginView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const { user: currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   console.log('useEffect');
  //   if (currentUser) {
  //     history.push('/');
  //   }
  // }, [currentUser, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    history.push('/');
  };
  return (
    <div className='login'>
      <h1>Simple Blog</h1>

      {currentUser ? (
        <Redirect to='/' />
      ) : (
        <form onSubmit={handleSubmit} className='login__form'>
          {error && <CustomAlert error>{error}</CustomAlert>}
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
          <Button
            type='submit'
            variant='contained'
            disabled={status === 'loading' ? true : false}
          >
            Login
          </Button>
          <p>
            Dont have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginView;
