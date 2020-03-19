import React from 'react';

// Linking 
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
      <Link to={`/edit/${id}`}> <p>{description}</p> </Link>
      <p> {amount}</p>
      <p> {createdAt} </p>
    </div>
);

export default ExpenseListItem;