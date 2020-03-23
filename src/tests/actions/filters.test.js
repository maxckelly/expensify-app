import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from './../../actions/filters';

test('Should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('Should sort by amount', () => {
  const action = sortByAmount('Amount');

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'Amount'
  })
});

test('Should generate sort by date object', () => {
  const action = sortByDate('Date');

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'Date'
  })
});

test('Should generate set text filter object with text value', () => {

  const text = 'Rent'; 
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  })
});

test('Should generate set text filter object with default', () => {

  const text = '';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  })
})