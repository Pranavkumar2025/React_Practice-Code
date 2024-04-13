import React from 'react'
import {set,ref , getDatabase} from "firebase/database";
import app from './firebase';


const db = getDatabase(app);

const App = () => {

  const putData = ()=>{
    set(ref(db,"user/pranav"),{name: "Pranav Kumar",email: "pranav@gmail.com",age: 21});
  };

  return (
    <div>
      <h1>Hello FireBase I am Back</h1>
      <button onClick={putData}>Put Data</button> 
    </div>
  )
}

export default App
