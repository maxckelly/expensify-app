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
  }
};

export default expensesReducer;