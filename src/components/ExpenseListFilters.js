import React from 'react';
import { connect } from 'react-redux';

// Packages
import { DateRangePicker } from 'react-dates';

// Actions
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './../actions/filters';

class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null,
  }

  onDateChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState({calendarFocused: calendarFocused})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(event) => {
          this.props.dispatch(setTextFilter(event.target.value))
          }}
        />

        <select onChange={(event) => {

          const value = event.target.value;

          if (value === "date") {
            this.props.dispatch(sortByDate())
          } else if (value === "amount") {
            this.props.dispatch(sortByAmount())
          } else {
            console.log("Nothing")
          }
          }}
        >
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}



export default connect(mapStateToProps)(ExpenseListFilters);