import { app } from "./Firebase";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import './App.css'
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const putData = ()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      alert("Sign SuccesFull");
    }).catch(()=>{alert("You are Entering wrong Email and password")});
  }
  return (
    <>
    <h1>firebase</h1>
    <h3>Email id: </h3>
    <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
    <h3>Password</h3>
    <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button onClick={putData}>Sign In</button>
    </>
  )
} 

export default App
