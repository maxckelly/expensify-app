import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Components
import AddExpense from './../components/AddExpense.js';
import EditExpense from './../components/EditExpense.js';
import ExpenseDashboard from './../components/ExpenseDashboard.js';
import Header from './../components/Header.js';
import Help from './../components/Help.js';
import NotFound from './../components/NotFound.js';

// Switch basically makes it easier for the routes to know when a user is on a 404 page. 
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;