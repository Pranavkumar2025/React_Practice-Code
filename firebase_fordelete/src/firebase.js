// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAReDmQsAP_ES44ChA9ts3rsPQySZ9nD8",
  authDomain: "myproject-practice-110ed.firebaseapp.com",
  databaseURL: "https://myproject-practice-110ed-default-rtdb.firebaseio.com",
  projectId: "myproject-practice-110ed",
  storageBucket: "myproject-practice-110ed.appspot.com",
  messagingSenderId: "1044098543620",
  appId: "1:1044098543620:web:f5319a14cad3360f76c551",
  databaseURL: "https://myproject-practice-110ed-default-rtdb.firebaseio.com",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 export default app;