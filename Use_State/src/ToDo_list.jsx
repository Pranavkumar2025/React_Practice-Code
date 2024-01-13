import React, { useCallback, useState } from "react";
import "./ToDo_list.css";


const ToDo_list = ()=>{

    const[items,SetItems] = useState("");

    const inputChange = (event)=>{
        SetItems(event.target.value);
    }

    const SubmitMe = ()=>{
        alert("Your Submit button Work Properly")
    }

    return(
        <div className="fullScreen">
            <div className="ToDo_box">
                <h1 className="todo_txt"> 📃🖌️ ToDo List 🖌️📃</h1>
                <form className="todo_input" onSubmit={SubmitMe} >
                    <input type="text" name="item" id="" onChange={inputChange} />
                    <button>+</button>
                </form>
                <div className="todo_list">
                    <ul>
                        <li>{items}</li>
                    </ul>
                </div>
            </div>

        </div>
        
    );
}

export default  ToDo_list;