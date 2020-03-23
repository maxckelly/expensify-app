import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  // To Equal is for objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('Should setup edit expense action', () => {
  const action = editExpense('123abc', {note: 'New note value'})

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New note value'}
  })
});

// The below is saying it is creating the object, the expect.any(String) is for the ID

test('Should set up add expense action', () => {

  const expenseData = {
    description: 'Rent',
    amount: 1009,
    createdAt: 1000,
    note: 'This was last months rent'
  }

  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('Should setup add expense action object with default values', () => {

  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})