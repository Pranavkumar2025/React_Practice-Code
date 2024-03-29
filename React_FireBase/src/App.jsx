// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {app} from "./Firebase"

import SignIn from "./assets/SignIn"
import SignUp from "./assets/SignUp"

// const auth = getAuth(app);
const App = () => {
 
  return (
    <div>
      <h1>DataBase React App</h1>
      <SignUp/>
      <h1>For Sign IN</h1>
      <SignIn/>

      
    </div>
  )
}

export default App
