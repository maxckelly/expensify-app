import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';

// Action
import { startAddExpense } from "./../actions/expenses";

// exporting below for testing
export class AddExpense extends React.Component {

  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1> Add Expense </h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
};


export default connect(undefined,mapDispatchToProps)(AddExpense);