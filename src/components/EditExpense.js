import React from 'react';
// Redux 
import {connect} from 'react-redux';
// Action
import { startEditExpense, startRemoveExpense } from "./../actions/expenses";

// Component 
import ExpenseForm from "./ExpenseForm";

export class EditExpense extends React.Component {
  
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = (event) => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push("/");
  };

  render () {
    return (
      <div>
        <h1> Edit Expense </h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}> Remove </button>
      </div>
    )
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
