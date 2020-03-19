import React from 'react';

// Date packages
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();
console.log()

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

  onCalendarFocusedChange = ({focused}) => {
    this.setState({calendarFocused: focused})
  };


  render () {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />

          <input 
            type="number"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusedChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>

          <button> Add Expense </button>
        </form>
      </div>
    )
  }
};

export default ExpenseForm;