import React from 'react';
import LoginView from '../views/loginView/LoginView';
import RegisterView from '../views/registerView/RegisterView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import HomeView from '../views/homeView/HomeView';
import PostDetailView from '../views/postDetailView/PostDetailView';
import CreatePostView from '../views/createPostView/CreatePostView';
import YourPostView from '../views/yourPostView/YourPostView';
import UserProfileView from '../views/userProfileView/UserProfileView';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginView} />
          <Route exact path='/register' component={RegisterView} />
          <PrivateRoute
            exact
            path='/post/new-post'
            component={CreatePostView}
          />
          <PrivateRoute exact path='/post/:id' component={PostDetailView} />
          <PrivateRoute exact path='/user/posts' component={YourPostView} />
          <PrivateRoute
            exact
            path='/user/profile'
            component={UserProfileView}
          />
          <PrivateRoute exact path='/' component={HomeView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
