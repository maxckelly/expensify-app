const promise = new Promise((resolve, reject) => {
  // Set timeout adds x amount of time on before function inside is run
  setTimeout(() => {
    resolve({
      name: 'Max',
      age: 22
    })
    reject('Something went wrong')
  }, 5000);
});

console.log('Before');

promise.then((data) => {
  console.log('1', data)
}).catch((err) => {
  console.log(err)
})

promise.then((data) => {
  console.log('2', data)
});

console.log('After');