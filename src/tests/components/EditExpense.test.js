import React from 'react';
import { shallow } from 'enzyme';
import EditExpense from './../../components/EditExpense';
import expenses from './../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

// Should render Edit expense page
beforeEach(() => {
  onSubmit = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpense editExpense={}/> )
})


// Should handle edit Expense - Spies

// Should handle removeExpense - Spies
