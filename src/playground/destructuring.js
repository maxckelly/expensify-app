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
const {name: firstName = 'Anonymous', age} = person
const {city, temp} = person.location

console.log(`${firstName} is ${age} and lives in ${city} and the temp is ${temp}`)

const book = {
  title: 'Harry Potter',
  author: 'Max Kelly',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName)