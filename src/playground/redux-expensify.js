import {createStore, combineReducers} from 'redux';

// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
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

console.log(store.getState());


const demoState = {
  expenses: [{
    id: 'sgoengeo',
    description: 'January Rent',
    note: 'This was the final payment made.',
    amount: 54000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or amount.
    startDate: undefined,
    endDate: undefined
  }
}