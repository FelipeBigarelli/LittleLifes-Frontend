import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserDashboard from '../pages/UserDashboard';
import UserProfile from '../pages/UserProfile';
import CreatePost from '../pages/CreatePost';

const Routes: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user !== null) {
      JSON.parse(localStorage.getItem('user'));
      console.log(typeof user);
    }
  }, []);

  return (
    <Switch>
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/" exact>
        <Redirect to="/signin" />
      </Route>
      <Route path="/profile" component={UserProfile} />
      <Route path="/createpost" component={CreatePost} />
    </Switch>
  );
};
export default Routes;
