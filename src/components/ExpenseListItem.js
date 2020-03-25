import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

// Linking 
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}> <p>{description}</p> </Link>
    <p> {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')} </p>
  </div>
);

export default ExpenseListItem;