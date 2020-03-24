import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';

// Action
import {addExpense} from "./../actions/expenses";

// exporting below for testing
export class AddExpense extends React.Component {

  onSubmit = (expense) => {
    this.props.addExpense(expense);
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
    addExpense: (expense) => dispatch(addExpense(expense))
  }
};


export default connect(undefined,mapDispatchToProps)(AddExpense);