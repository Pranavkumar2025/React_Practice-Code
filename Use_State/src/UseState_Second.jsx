import React, { useState } from "react";

import "./index.css";

const UseState_Second = ()=>{

    const [mytxt, Updatetxt] = useState("");
    const [fullmytxt,NewUpdatetext] = useState();

    const ChangeText = (event)=>{
        Updatetxt(event.target.value);
    }

    const submitText = ()=>{
        NewUpdatetext(mytxt);

    }
    return(
        <>
        <div className="container" id="box-1" >
            <h1 className="head_txt">Hello {fullmytxt}</h1>
            <input type="text" name="" id="inpt" placeholder="Enter your Name" onChange={ChangeText} />
            <button onClick={submitText}>Submit</button>
        </div>
        
        </>
    );
}

export default UseState_Second;