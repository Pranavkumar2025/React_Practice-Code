import { app } from "./Firebase";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import './App.css'
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const putData = ()=>{
    createUserWithEmailAndPassword(auth,email,password);
  }
  return (
    <>
    <h1>firebase</h1>
    <h3>Email id: </h3>
    <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
    <h3>Password</h3>
    <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button onClick={putData}>Sign Up</button>
    </>
  )
}

export default App
