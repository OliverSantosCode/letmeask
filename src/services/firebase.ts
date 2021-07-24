import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBkpBlGpD1nXqTHR5GEw8n0VjzyK3HsXmU",
    authDomain: "letmeask-0987.firebaseapp.com",
    databaseURL: "https://letmeask-0987-default-rtdb.firebaseio.com",
    projectId: "letmeask-0987",
    storageBucket: "letmeask-0987.appspot.com",
    messagingSenderId: "557903659452",
    appId: "1:557903659452:web:776ecdbcb35b6b8b1debb9"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();