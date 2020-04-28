import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHuRWQkcsNFsCB06db_u5Yv9M7mdwwq8I",
  authDomain: "expensify-a01b1.firebaseapp.com",
  databaseURL: "https://expensify-a01b1.firebaseio.com",
  projectId: "expensify-a01b1",
  storageBucket: "expensify-a01b1.appspot.com",
  messagingSenderId: "854625211131",
  appId: "1:854625211131:web:95839f49121cd4120a565e",
  measurementId: "G-03NZTXVCG5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
 
const database = firebase.database();
database.ref().set({
  name: "Max Kelly",
  age: 22,
  isSingle: false,
  location: {
    city: "Melbourne",
    country: "Australia"
  }
}).then(() => {
  console.log('Data has been saved')
}).catch((err) => {
  console.log(err)
});

// database.ref().set('This is my data');

// database.ref('age').set(23)
// database.ref('location/city').set('Sydney')

// Attributes
database.ref('attributes').set({
  height: 190,
  weight: 90
}).then(() => {
  console.log('Data has been saved')
}).catch((err) => {
  console.log(err)
});

database.ref('isSingle').remove().then(() => {
  console.log('Remove successful')
}).catch((err) => {
  console.log(err)
});