// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxb85h3KNtbWLTZfYXWk3uKc0Vc0tgqjA",
  authDomain: "app-20c69.firebaseapp.com",
  projectId: "app-20c69",
  storageBucket: "app-20c69.appspot.com",
  messagingSenderId: "462767198461",
  appId: "1:462767198461:web:5ce575768aa22b05a72e94",
  databaseURL: "https://app-20c69-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);