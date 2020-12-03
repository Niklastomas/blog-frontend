import React from 'react';
import LoginView from '../views/loginView/LoginView';
import RegisterView from '../views/registerView/RegisterView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import HomeView from '../views/homeView/HomeView';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginView} />
          <Route exact path='/register' component={RegisterView} />
          <PrivateRoute path='/' component={HomeView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
