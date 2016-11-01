import firebase from 'firebase'
import ReactGA from 'react-ga'

// Init GA
ReactGA.initialize('UA-26235588-4');

// Init Firebase
var config = {
  apiKey: "AIzaSyATo1imYqk8xS0QrtByq6HGTQYZHe4NC9g",
  authDomain: "groshampoo.firebaseapp.com",
  databaseURL: "https://groshampoo.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1042364308022"
};

firebase.initializeApp(config);
