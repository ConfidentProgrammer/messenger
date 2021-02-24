// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYp1QF6BdOaY0Few7ozjNfuFjOMZG0RUs",
    authDomain: "messanger-77011.firebaseapp.com",
    projectId: "messanger-77011",
    storageBucket: "messanger-77011.appspot.com",
    messagingSenderId: "430289019578",
    appId: "1:430289019578:web:f3d57747a41e5082f01883",
    measurementId: "G-561JY85217"
})
const database = firebaseApp.firestore();

export default database;