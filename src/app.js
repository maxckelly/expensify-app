import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter.js';

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


const store = configureStore();

// Add expense
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 1100, createdAt: -211000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: -1000 }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);




ReactDOM.render(<AppRouter />, document.getElementById('app'));