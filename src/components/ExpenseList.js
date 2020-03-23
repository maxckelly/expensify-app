import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// This export is used for testing 
export const ExpenseList = (props) => (
  <div>
    <h1> Expense List </h1>
    {
      props.expenses.length === 0 ? (
        <p> No Expenses </p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }
    <p> {props.expenses.length} </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);