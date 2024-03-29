import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {app} from "../Firebase";
import { GoogleAuthProvider } from "firebase/auth";



const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const SignIn = () => {

    const [email,setEmail] = useState("");
    const [password,SetPassword] = useState("");

    const SignInBtn = ()=>{
        signInWithEmailAndPassword(auth,email,password).then(()=>alert("Sign in Successfull")).catch(()=>alert("Wrong Email or Password"));
    }

    const SignGoogle =  ()=>{
        signInWithPopup(auth,provider);
    }

  return (
    <div>
      <div>
        <label htmlFor="">Email Id</label>
        <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="" id=""  onChange={(e)=>SetPassword(e.target.value)}/>
      </div>
      <button onClick={SignInBtn}>Sign In</button>
      <button onClick={SignGoogle}>Sign With Google</button>
    </div>
  )
}

export default SignIn
