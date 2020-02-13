import { createStore } from 'redux';


// Below is an example of default and object destructor.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  // The below is an example of dynamic information
  incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({count = 101} = {}) => ({
  type: "SET",
  count: count
})

const resetCount = ({count = 0} = {}) => ({
  type: "RESET",
  count: count
})

const store = createStore((state = { count: 0}, action) => {

  switch(action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET': 
      return {
        count: action.count
      };
    default:
      return state;
  }

  return state;
});


// Unsubscribe when called stops logging when the state changes.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// The below stops the console.logs to appear when the state is changed. 
// unsubscribe();

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount({decrementBy: 5}))
store.dispatch(decrementCount());

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({count: 102}))


