import React, { useState } from "react";

import './React_revision.css';

const React_revision = ()=>{
    // const name = "Pranav Kumar";
    const[myName,setMyName]=useState("Pranav Kumar");

    const[inptName,setinptName]=useState();

    const inputChange = (resp)=>{
        
    }
    



    return(
        <>
           <div className="box">

            <h1>Hello everyone What is your name. </h1>
            <h1>My name is {myName}</h1>
            <input type="text" name="" id=""  onChange={inputChange}/>
            <button> Click Me</button>

           </div>
        </>
    );
}

export default React_revision;