import * as firebase from 'firebase';

// Initialize Firebase
export const config = {
    apiKey: "AIzaSyDx8ol-_zgQoNlHMAIdUTLpQUG85TFw_9Q",
    authDomain: "database-362cb.firebaseapp.com",
    databaseURL: "https://database-362cb.firebaseio.com",
    projectId: "database-362cb",
    storageBucket: "database-362cb.appspot.com",
    messagingSenderId: "759304096773"
  };

firebase.initializeApp(config);

export const database = firebase.database().ref('elements');

export const auth = firebase.auth();