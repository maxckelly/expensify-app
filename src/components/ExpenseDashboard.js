import React from 'react';

// Components
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;