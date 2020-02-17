// CHANGE FILTER TEXT
export const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text: text
});

// CHANGE SORT TO AMOUNT
export const sortByAmount = ({ sortBy = 'Amount' } = {}) => ({
  type: "SORT_BY_AMOUNT",
  sortBy: sortBy
});


// CHANGE SORT TO DATE
export const sortByDate = ({ sortBy = 'Date' } = {}) => ({
  type: "SORT_BY_DATE",
  sortBy: sortBy
});

// SET START DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate: startDate
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate: endDate
});