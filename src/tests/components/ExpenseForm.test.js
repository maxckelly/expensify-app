import React from 'react';
import moment from 'moment';
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

test('Should set amount if valid input', () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe(value);
})

test('Should NOT set amount if INVALID input', () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe("");
});

// Spies are used to check if something has been successfully submitted with data/props.
test('Should call onSubmit prop for valid form submission', () => {
  // To create the spy use jest.fn();
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  // The below checks if no errors have been passed into the error state.
  expect(wrapper.state('error')).toBe('');

  // The below checks if the form was submitted with the below props.
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('Should set new date on dateChange', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  // Below finds the component
  // The prop is the function that is passed through.
  // The withStyles is due to how the date package is set up.
  wrapper.find("SingleDatePicker").prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus change', () => {
  const focused = true;
  const now = moment(0);
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("SingleDatePicker").prop('onFocusChange')({focused});
  console.log(wrapper.state('focused'))
  expect(wrapper.state('calendarFocused')).toEqual(focused)
})