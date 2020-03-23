import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from './../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm /> );
  expect(wrapper).toMatchSnapshot();
});

// renders the form with expense data
test('Should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot();
})