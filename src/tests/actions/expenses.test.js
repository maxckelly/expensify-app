import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from './../../actions/expenses';
import expenses from './../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt };
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should edit expense in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = {note: 'THIS HAS BEEN UPDATED'}
  const id = expenses[0].id;

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe(updates.note)
    done()
  }).catch(done)
});

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  // To Equal is for objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('Should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
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
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store.', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 30,
    note: 'My new mouse', 
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  }).catch(done)
});

test('Should add expense with default to database and store.', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  }).catch(done)
});

test('Should set up set expense action with object data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('Should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  })
});