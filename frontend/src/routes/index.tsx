import React from 'react';
import { Switch , Redirect} from 'react-router-dom';

import Admin from 'layouts/Admin';
import Auth from 'layouts/Auth';
import Route from './Route';

import Landing from 'views/Landing';
import Profile from 'views/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/admin" component={Admin} isPrivate/>
    <Route path="/auth" component={Auth} />
    {/* <Route path="/" component={Landing} /> */}
    {/* <Route path="/profile" exact component={Profile} /> */}
    <Redirect from="/" to="/admin" />

  </Switch>
);

export default Routes;
