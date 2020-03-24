import React from 'react';
import { connect } from 'react-redux';

// Packages
import { DateRangePicker } from 'react-dates';

// Actions
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './../actions/filters';

export class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null,
  };

  onDateChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  };

  onFocusChange = (calendarFocused) => {
    this.setState({calendarFocused: calendarFocused})
  };

  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value)
  };

  onSortChange = (event) => {
    const value = event.target.value;

    if (value === "date") {
      this.props.sortByDate()
    } else if (value === "amount") {
      this.props.sortByAmount()
    } else {
      console.log("Nothing")
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text}
          onChange={this.onTextChange} 
        />

        <select onChange={this.onSortChange}>
          <option value="date"> Date </option>
          <option value="amount"> Amount </option>
        </select>

        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDateChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});  



export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);