import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/base/_base.scss';

// Components 
const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard page
  </div>
);

const AddExpensePage = () => (
  <div>
    Add expense page
  </div>
);

const EditExpensePage = () => (
  <div>
    Edit page
  </div>
);

const HelpPage = () => (
  <div>
    Help Page
  </div>
);

const NotFoundPage = () => (
  <div>
    Page Not Found <Link to="/"> Go Home </Link>
  </div>
);

const Header = () => (
  <header>
    <h1> Expensify App </h1>
      <NavLink to="/" activeClassName="is-active" exact={true} > Home </NavLink>
      <NavLink to="/create" activeClassName="is-active"> Add Expense </NavLink>
      <NavLink to="/edit" activeClassName="is-active"> Edit Expense </NavLink>
      <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
  </header>
)

// CSS
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Switch basically makes it easier for the routes to know when a user is on a 404 page. 
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} /> 
        <Route path="/edit" component={EditExpensePage} /> 
        <Route path="/help" component={HelpPage} /> 
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));