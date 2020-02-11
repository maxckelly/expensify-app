console.log('utils.js is running')

const square = (x) => {
  return x * x;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

export { square, add, subtract as default };