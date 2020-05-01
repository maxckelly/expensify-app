import React from 'react';
import { shallow } from 'enzyme';
import {EditExpense} from './../../components/EditExpense';
import expenses from './../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(
    <EditExpense 
      editExpense={editExpense}
      history={history} 
      startRemoveExpense={startRemoveExpense}
      expense={expenses[1]}
    />);
});

test('Should render EditExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// Should handle edit Expense - Spies
test('Should handle EditExpense', () => {
  const id = expenses[1].id
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(id, expenses[1]);
});

// Should handle removeExpense - Spies

test('Should handle removeExpense', () => {
  const id = expenses[1].id
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id});
});
