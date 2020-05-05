import React from 'react';

// Date packages
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount
      this.setState({error: 'Please provide description and amount'})
    } else {
      // Clear error here
      this.setState({error: ''})
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  }

  onDescriptionChange = (event) => {
    const inputValue = event.target.value;

    this.setState({description: inputValue })
  };

  
  onNoteChange = (event) => {
    const inputValue = event.target.value;

    this.setState({ note: inputValue })
  };

  onAmountChange = (event) => {
    const amount = event.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount: amount })
    }
  };

  onDateChange = (createdAtDate) => {

    if (createdAtDate) {
      this.setState({ createdAt: createdAtDate })
    }
  };

  onFocusChange = ({focused}) => {
    this.setState({calendarFocused: focused})
  };


  render () {
    return (  
      <form className="form" onSubmit={this.onSubmit}>
        <p className="form__error"> {this.state.error} </p>

        <input 
          className="text-input"
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />

        <input 
          className="text-input"
          type="number"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          className="text-area"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>

        <div>
          <button className="button"> Add Expense </button>
        </div>
      </form>
    )
  }
};

export default ExpenseForm;