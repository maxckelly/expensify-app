import React from 'react';

// Redux
import {connect} from 'react-redux';

// Actions
import {removeExpense} from './../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
      <p> {description}</p>
      <p> {amount}</p>
      <p> {createdAt} </p>
      <button 
        onClick={(event) => {
          console.log({id})
          dispatch(removeExpense({id}));
        }}
      > 
        Remove 
      </button>
    </div>
);


export default connect()(ExpenseListItem);