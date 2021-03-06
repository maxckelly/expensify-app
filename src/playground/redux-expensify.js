import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'; //UUID - ID generator 

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id: id
  }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id: id,
  updates: updates
})

// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    // The below return adds the new expense onto the expense array instead of removing the old.
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      // Filter returns a new array and if the item is not equal (false) to the action id then it will be filtered out.
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      // The below maps through the expenses, then if the id matches it will spread out the expense array and then every update that has taken place will be added. 
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  };
};

// CHANGE FILTER TEXT
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text: text
});

// CHANGE SORT TO AMOUNT
const sortByAmount = ({sortBy = 'Amount'} = {}) =>({
  type: "SORT_BY_AMOUNT",
  sortBy: sortBy
});


// CHANGE SORT TO DATE
const sortByDate = ({ sortBy = 'Date' } = {}) => ({
  type: "SORT_BY_DATE",
  sortBy: sortBy
});

// SET START DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate: startDate
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate: endDate
});

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      // The below iterates through the object then assigns action.text to text.
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'Date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    if (sortBy === 'Amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
})


// Add expense
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1100, createdAt: -211000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200 , createdAt: -1000}));

// Set start date
// store.dispatch(setStartDate(1000));

// Set end date
// store.dispatch(setEndDate(125));


// // Remove expense
// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// // Edit expense
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// Change text filer 
// store.dispatch(setTextFilter('ee'));
// store.dispatch(setTextFilter());

// // Change the sort by to either amount or data.
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(sortByAmount())