// import firebase from "firebase";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

initializeApp({
    apiKey: "AIzaSyA2wMi04h2hZUDTUFnKQKSaw5Nsmsnfu0E",
    authDomain: "stctask5.firebaseapp.com",
    projectId: "stctask5",
    storageBucket: "stctask5.appspot.com",
    messagingSenderId: "307806444444",
    appId: "1:307806444444:web:2c7094351a16ba95718659",
    measurementId: "G-NKHZG22TXT"
  });
  
  export const db = getFirestore();

// var firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyA2wMi04h2hZUDTUFnKQKSaw5Nsmsnfu0E",
//     authDomain: "stctask5.firebaseapp.com",
//     projectId: "stctask5",
//     storageBucket: "stctask5.appspot.com",
//     messagingSenderId: "307806444444",
//     appId: "1:307806444444:web:2c7094351a16ba95718659",
//     measurementId: "G-NKHZG22TXT"
// });

// var db = firebaseApp.firestore();

// export { db } ;