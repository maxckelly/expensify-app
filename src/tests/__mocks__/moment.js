const moment = require.requireActual('moment');

// below allows us to test components with moment 
export default (timestamp = 0) => {
  return moment(timestamp)
}