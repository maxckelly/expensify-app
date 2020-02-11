import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    Page Not Found
  </div>
);

// CSS
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Switch basically makes it easier for the routes to know when a user is on a 404 page. 
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} /> 
      <Route path="/edit" component={EditExpensePage} /> 
      <Route path="/help" component={HelpPage} /> 
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));