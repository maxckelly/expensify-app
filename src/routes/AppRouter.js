import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Components
import AddExpense from './../components/AddExpense.js';
import EditExpense from './../components/EditExpense.js';
import ExpenseDashboard from './../components/ExpenseDashboard.js';

import Help from './../components/Help.js';
import NotFound from './../components/NotFound.js';
import Login from './../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

// Switch basically makes it easier for the routes to know when a user is on a 404 page. 
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;