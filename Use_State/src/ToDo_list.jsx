import React, { useCallback, useState } from "react";
import "./ToDo_list.css";
import ToDo_items from "./ToDo_items";


const ToDo_list = ()=>{

    const[inputList,SetinputList] = useState("");
    const[items,SetItems] = useState([]);

    const inputChange = (event)=>{
        SetinputList(event.target.value);
    }

    const listofItems = ()=>{
        SetItems((oldItems)=>{
            return[...oldItems,inputList];
        });
        SetinputList("");
    };

    return(
        <div className="fullScreen">
            <div className="ToDo_box">
                <h1 className="todo_txt"> 📃🖌️ ToDo List 🖌️📃</h1>
                <div className="todo_input" >
                    <input type="text" name="item" id="" value={inputList} onChange={inputChange} placeholder="Add a items"/>
                    <button onClick={listofItems} >+</button>
                </div>
                <div className="todo_list">
                    <ul>
                        {items.map((itemValue)=>{
                            return <ToDo_items text = {itemValue}/>
                        })}
                    </ul>
                </div>
            </div>

        </div>
        
    );
}

export default  ToDo_list;