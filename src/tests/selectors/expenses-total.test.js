import selectExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const response = selectExpensesTotal([]);
  expect(response).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const response = selectExpensesTotal([expenses[0]]);

  expect(response).toBe(1000)
});

test('Should correctly add up multiply expenses', () => {
  const response = selectExpensesTotal(expenses);
  expect(response).toBe(115000)
});