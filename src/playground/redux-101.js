import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {

  switch(action.type) {

    case 'INCREMENT':
       // The below is an example of dynamic information
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET': 
      return {
        count: state.count = 0
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

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 3
});

store.dispatch({
  type: 'RESET'
});

// The below stops the console.logs to appear when the state is changed. 
// unsubscribe();

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});


