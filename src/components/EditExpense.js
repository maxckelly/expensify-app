import React from 'react';

const EditExpense = (props) => {
  return (
    <div>
      Edit page the expense with id of {props.match.params.id}
    </div>
  )
};

export default EditExpense;
