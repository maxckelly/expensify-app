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

        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title"> Edit Expense </h1>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}> Remove Expense </button> 
        </div>
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
