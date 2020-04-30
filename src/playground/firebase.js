// Subscribers 
// child_remove
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// });

// child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// });

// child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// --- PUSHING ARRAYS:
// Firebase creates a new property on the reference making it a random id.
// You want to use push when creating an array.
// database.ref('notes').push({
//   title: "This is my title",
//   body: "HELLO THERE"
// });

const expenses = [
  {
    description: 'Smoothie',
    note: 'The best smoothie',
    amount: 23,
    createdAt: '21st July',
  },
  {
    description: 'Coffee',
    note: 'The best smoothie',
    amount: 4,
    createdAt: '22nd July',
  },
  {
    description: 'Lunch',
    note: 'The best smoothie',
    amount: 100,
    createdAt: '23rd July',
  },
];

// The below pushes each expense
// expenses.map((expense) => {
//   database.ref('expenses').push(expense)
// })

// The below gets the expenses
// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   })

//   console.log(expenses)
// })

// database.ref('expenses').on('value', snapshot).once('value').then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   })

//   console.log(expenses)
// })

// Adding a listener without promise
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   })

//   console.log(expenses)
// });

// 
// database.ref('notes/-M67V128curtIGvuAB7U').update({
//   body: 'This is my updated body HELLO THERE'
// })

// database.ref('notes/-M67V128curtIGvuAB7U').remove()

//------SECTION-----

// const firebaseNotes = [
//   {
//     title: 'First Note!',
//     body: 'This is my note'
//   },
//   {
//     title: 'Another note',
//     body: 'This is my note'
//   }
// ];

// const notes = (firebaseNotes) => {
//   console.log(firebaseNotes)
//   firebaseNotes.map((notes) => {
//     database.ref('notes').push(notes)
//   })
// }

// notes(firebaseNotes)

//---END SECTION----


// FETCHING DATABASE: 
// On allows us to listen to every time something changes.. 
// off() turns off the database check unsubscribing it from listening to changes.  database.ref().off()
// database.ref().on('value', (snapshot) => {
//   const age = snapshot.val().age;
//   const name = snapshot.val().name
//   const jobTitle = snapshot.val().job.title

//   console.log(`${name} is ${age} and is a ${jobTitle}`)
// });

// setTimeout(() => {
//   database.ref('age').set(29)
//   database.ref('job/title').set('Helicopter Pilot')
// }, 3500);

// Once returns a promise of the data once
// database.ref().once('value').then((snapshot) => {
//   const val= snapshot.val();
//   console.log(val)
// }).catch((err) => {
//   console.log('Error fetching data', err)
// })

// database.ref().set({
//   name: "Max Kelly",
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: "Melbourne",
//     country: "Australia"
//   }
// }).then(() => {
//   console.log('Data has been saved')
// }).catch((err) => {
//   console.log(err)
// });

// // database.ref().set('This is my data');

// // database.ref('age').set(23)
// // database.ref('location/city').set('Sydney')

// // Attributes
// database.ref('attributes').set({
//   height: 190,
//   weight: 90
// }).then(() => {
//   console.log('Data has been saved')
// }).catch((err) => {
//   console.log(err)
// });

// // -------------UPDATE----------
// // Update you can create, remove and update all in one
// // database.ref().update({
// //   name: 'John',
// //   age: 34,
// //   job: 'Software Developer',
// //   isSingle: null
// // });

// // Below is how you update an object within the db - You have to wrap it in quotes
// database.ref().update({
//   'location/city': 'Sydney'
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon'
// });

// // -------------REMOVE----------
// // The below is how you remove something from the db.
// database.ref('isSingle').remove().then(() => {
//   console.log('Remove successful')
// }).catch((err) => {
//   console.log(err)
// });