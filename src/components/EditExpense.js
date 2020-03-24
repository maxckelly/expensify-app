import React from 'react';
// Redux 
import {connect} from 'react-redux';
// Action
import { editExpense, removeExpense } from "./../actions/expenses";

// Component 
import ExpenseForm from "./ExpenseForm";

export class EditExpense extends React.Component {
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = (event) => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push("/");
  };

  render () {
    return (
      <div>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
