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

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm  />)
  // The below finds the elements by id/tag name. Simulate doe the action for you. e.g. click
  // The prevent default is to avoid an error.
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // The below gets the state
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);

  // .at allows you to select a particular element e.g. 0 is the first.
  // The target is the event that is taken in through the element.
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  // The below expect checks if the state description: equals the above value const.
  expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea change', () => {
  const value = 'New Note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value);
});

// Should set amount if valid input
// 23.50
test('Should set amount if valid input', () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe(value);
})

// Should not set amount if invalid input
// 12.122
test('Should NOT set amount if INVALID input', () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe("");
});