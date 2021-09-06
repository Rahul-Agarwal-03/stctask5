import { initializeApp} from "firebase/app"
import { getAuth} from "firebase/auth";
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
  
  export const auth = getAuth();