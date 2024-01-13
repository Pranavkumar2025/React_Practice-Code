import React, { useState } from "react";

import './React_revision.css';

const React_revision = ()=>{
    // const name = "Pranav Kumar";

    const [fullName,setfulName] = useState({
        fname:"",
        lname:"",
        Email:""
    });

    const inputEvent = (event)=>{
        setfulName(event.targt.value);
    }


    
    const onSubmit = ()=>{
        alert("Your submitted the form");
    }


 
    return(
        <>
           <div className="box">

            <h1>Hello everyone What is your name. </h1>
            <h1>My name is {fullName.fname} {fullName.lname} </h1>
            <p>Your Email id: {fullName.Email}</p>
            <form onSubmit={onSubmit}>
            <input type="text" name="fname" id=""  onChange={inputEvent} placeholder="Enter your First name"/>
            <input type="text" name="lname" id=""  onChange={inputEvent} placeholder="Enter your last name"/>
            <input type="email" name="email" id="" onChange={inputEvent} placeholder="Enter your Email id.."/>
            <button> Click Me</button>
            </form>

           </div>
        </>
    );
}

export default React_revision;