import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import CreateUser from '../pages/Users/CreateUser';
import UserList from '../pages/Users/UserList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/admin" exact component={Dashboard} />
    <Route path="/admin/users" exact component={UserList} />
    <Route path="/admin/user/create" exact component={CreateUser} />
  </Switch>
);

export default Routes;