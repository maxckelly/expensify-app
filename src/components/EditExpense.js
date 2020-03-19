import React from 'react';
// Redux 
import {connect} from 'react-redux';
// Action
import { editExpense } from "./../actions/expenses";
import { removeExpense } from './../actions/expenses';
// Component 
import ExpenseForm from "./ExpenseForm";

const EditExpense = (props) => {

  const id = props.expense.id;
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(editExpense(id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={(event) => {
          props.dispatch(removeExpense({ id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  };
};

export default connect(mapStateToProps)(EditExpense);
