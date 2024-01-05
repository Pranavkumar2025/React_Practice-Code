import React, { useState } from "react";

import styled from "styled-components";

// import "./index.css";


//1. -------------------------------- First Understand and learn this------------------------------------

    // -----> here on Submitting by filling two input position both submit at same time

                //   >>> but here use of UseState is very more

// const UseState_Second = ()=>{

//     const[name,SetName] = useState(" ");
//     const[LastName,SetLastName] = useState(" ");

//     const[FirstFullName,SetFullName] = useState();
//     const[SecondFullName,secondSetFullName] = useState();


//     const inputEvent = (event)=>{
//         SetName(event.target.value);
//     } 
//     const SecondInputEvent = (event)=>{
//         SetLastName(event.target.value);
//     }

// // --->> this is Activate when i click on Submit butoon
//     const OnSubmit = (event)=>{
//         event.preventDefault();
//         SetFullName(name); 
//         secondSetFullName(LastName);

//     }
//     return(
//         <>
//         <div className="container" id="box-1" >
//             <form onSubmit={OnSubmit}>
//             <h1 className="h1_txt">Hello {FirstFullName} {SecondFullName} </h1>
//             <input type="text" name="" id="inpt" placeholder="Enter your Name" onChange={inputEvent}/>
//            <input type="text" name="" id="inpt" placeholder="Enter your Last Name" onChange={SecondInputEvent}/>
//             <br />
//             <button type="submit">Click Me</button>
//             </form>
//         </div>
        
//         </>
//     );
// }



const UseStateObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="card">
          <h2 className="card-title text-center">Register</h2>
          <div className="card-body py-md-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  name="confirm_password"
                  placeholder="confirm-password"
                  autoComplete="off"
                  value={formData.confirm_password}
                  onChange={handleInput}
                />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <button className="btn btn-primary">Create Account</button>
              </div>
            </form>
            <div>
              <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(156, 100, 209);
  }
  h2 {
    font-size: 2.4rem;
    margin: 3.2rem 0;
  }
  a {
    color: #333;
  }
  a:hover {
    color: #da5767;
    text-decoration: none;
  }
  .card {
    // border: 0.1rem solid #f8f9fa;
    border: 5px solid black;
    border-radius: 5px;
    padding: 0 3.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .form-control:focus {
    color: #000000;
    background-color: #ffffff;
    border: inset 0.5rem solid #da5767;
    outline: 0;
    box-shadow: none;
  }

  input {
    width: 25rem;
    padding: 1rem 2rem;
    font-family: "Work Sans", sans-serif;
    outline: 0;
    border: none;
    font-size: 1.2rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    background-color: #df8c96;
    border-color: #df8c96;
    margin-bottom: 3.2rem;
  }

  .btn-primary:hover {
    background: #da5767;
    border: inset 0.2rem solid #da5767;
    transition: 0.3s;
  }
`;

export default UseStateObject;
