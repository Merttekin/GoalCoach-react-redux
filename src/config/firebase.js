import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD-AWwQwaMzY-Q04xV5iqJx6R6jr-Ly9_E",
    authDomain: "goalcoach-db0a8.firebaseapp.com",
    databaseURL: "https://goalcoach-db0a8.firebaseio.com",
    projectId: "goalcoach-db0a8",
    storageBucket: "goalcoach-db0a8.appspot.com",
    messagingSenderId: "275377203729",
    appId: "1:275377203729:web:6761436379af4128b85fb0"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);