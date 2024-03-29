// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM48cIkrpcZ-RZq1IXTRBbOTmhz4OpNbY",
  authDomain: "app-db2e2.firebaseapp.com",
  projectId: "app-db2e2",
  storageBucket: "app-db2e2.appspot.com",
  messagingSenderId: "896430114211",
  appId: "1:896430114211:web:181b22238fc9dbaea74616",
  databaseURL: "https://app-db2e2-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);