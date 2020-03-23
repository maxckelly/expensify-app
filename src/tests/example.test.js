const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(2, 4);

  // if (result !== 6) {
  //   throw new Error(`You added 2 and 4. The result was ${result}. Expected 6`)
  // }

  // Expect passes the value in then we use toBe and checks if the result is toBe 6
  expect(result).toBe(6);
});

test('Should expect name to be returned', () => {
  const result =  generateGreeting('Max');

  expect(result).toBe('Hello Max!');
});

test('Should generate greeting for no name', () => {
  const result = generateGreeting();

  expect(result).toBe('Hello Anonymous!')
})