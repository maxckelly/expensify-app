import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
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