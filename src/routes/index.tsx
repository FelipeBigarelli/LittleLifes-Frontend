import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserDashboard from '../pages/UserDashboard';
import UserProfile from '../pages/UserProfile';
import CreatePost from '../pages/CreatePost';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={UserDashboard} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/create-post" component={CreatePost} />
  </Switch>
);
export default Routes;
