import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/header/Header';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Header />
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to='/login' />;
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
