import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routes/AppRouter.js';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

// Store 
import configureStore from './store/configureStore';

// Store Actions
import {startSetExpenses, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import { login, logout } from './actions/auth';

// Store Selectors
import getVisibleExpenses from './selectors/expenses';

// Styles
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<p> Loading... </p>, document.getElementById('app'));



// Google auth
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp()
    history.push('/');
  }
});