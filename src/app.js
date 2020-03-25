import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter.js';
import { Provider } from 'react-redux';

// Store 
import configureStore from './store/configureStore';

// Store Actions
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';

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

ReactDOM.render(jsx, document.getElementById('app'));