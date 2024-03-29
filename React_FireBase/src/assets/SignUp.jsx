import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../Firebase";


const auth = getAuth(app);
const SignUp = () => {
    const[email,SetEmail] = useState("");
    const[password,SetPassword] = useState("");

    const ClickFunc = ()=>{
        createUserWithEmailAndPassword(auth,email,password).catch(()=>alert("Account Created succesfull"));
    }

  return (
    <div>
      <div>
        <label htmlFor="">Email id: </label>
        <input type="email" name="" id="" onChange={(e) => SetEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" onChange={(e) => SetPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={ClickFunc}>Click Me</button>
      </div>
    </div>
  )
}

export default SignUp
