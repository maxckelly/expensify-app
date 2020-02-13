// -------------------------
// OBJECT DESTRUCTION
// -------------------------

const person = {
  name: 'Max',
  age: 22,
  location: {
    city: 'Melbourne',
    temp: 29
  }
};

// The Anonymous is a default value if a name hasn't been entered. 
// We can also change the name to another word such as firstName.
// const {name: firstName = 'Anonymous', age} = person
// const {city, temp} = person.location

// console.log(`${firstName} is ${age} and lives in ${city} and the temp is ${temp}`)

// const book = {
//   title: 'Harry Potter',
//   author: 'Max Kelly',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self published'} = book.publisher;

// console.log(publisherName)

// -------------------------
// ARRAY DESTRUCTION
// -------------------------

const address = ['1299 S Junior St', 'Philadelphia', 'Victoria', '3100'];

// The below is matching it up by position e.g. street is first so it will match up with street
// The equals is how you set a default 
const [street = 'Unknown St', city, state, zip] = address;

// You can select only a few if you like. Doing the below: The comma tells the system to skip over that index of the array. 
// const [, city, state] = address;

console.log(`You're in ${street} ${city}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffeeType, , mediumSize, largeSize] = item;

console.log(`A medium ${coffeeType} costs ${mediumSize}`)