import expensesReducer from "./../../reducers/expenses";
// Belove is seed test data
import expenses from './../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([])
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});


test('Should NOT remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// Should add an expense
test('Should add expense', () => {
  const expense = {
    id: '4',
    description: 'Test Expense',
    note: '',
    amount: 2000,
    createdAt: moment(0)
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {

  const description = 'laptop';

  const action = {
    type: 'EDIT_EXPENSE', 
    id: expenses[1].id,
    updates: {
      description: description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description)
});

test('Should not edit expense if expense not found', () => {
  const description = 'laptop';

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: description
    }
  };
  
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
});