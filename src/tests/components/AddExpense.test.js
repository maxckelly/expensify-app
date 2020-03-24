import React from 'react';
import {shallow} from 'enzyme';
import {AddExpense} from './../../components/AddExpense';
import expenses from './../fixtures/expenses';

// These are to avoid spies getting mixed up
let onSubmit, history, wrapper;

// The below is saying, before each test run the below.
// Allows us to reuse the spies and not repeat our code.
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />);
});

test('Should render AddExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
});