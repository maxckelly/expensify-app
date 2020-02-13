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

// CHANGE FILTER TEXT
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text: text
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
    default:
      return state;
  }
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

// Add expense
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Rent', amount: 200 }));

// Remove expense
store.dispatch(removeExpense({id: expenseOne.expense.id}))

// Edit expense
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// Change text filer 
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

// const demoState = {
//   expenses: [{
//     id: 'sgoengeo',
//     description: 'January Rent',
//     note: 'This was the final payment made.',
//     amount: 54000,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // Date or amount.
//     startDate: undefined,
//     endDate: undefined
//   }
// }