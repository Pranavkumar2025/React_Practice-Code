import React, { useState } from "react";

import "./index.css";


// 1. ---------------- For revise (Use state) frist run this Part----------

// const MyUseState = ()=>{
//     const[crnt_data,Mychange]= useState(0);
    
//     const Newchange = ()=>{
//         Mychange(crnt_data + 1);
//     }

//     return(
//         <>
//         <div className="container">
//             <h1>{crnt_data}</h1>
//             <button className="btn" onClick={Newchange}>Click me</button>
//         </div>
        
//         </>
//     );
// }



//2.  ---------------------- Then After Run this Part -----------------------

        // -> Everytime when i click on button it will Update my time 

// const MyUseState = ()=>{

//     var C_time = new Date().toLocaleTimeString();
//     const[crnt_time,UpdateTime]= useState(C_time);
    
//     const Newtime = ()=>{
//         C_time = new Date().toLocaleTimeString();
//         UpdateTime(C_time);
//     }

//     return(
//         <>
//         <div className="container">
//             <h1>{crnt_time}</h1>
//             <button className="btn" onClick={Newtime}>Time</button>
//         </div>
        
//         </>
//     );
// }



// 3. ----------------- After running of above part Run this Part --------------

            // --> Shows Exact Clock time Change 

// const UseState = ()=>{

//     var C_time = new Date().toLocaleTimeString();
//     const[crnt_time,UpdateTime]= useState(C_time);
    
//     const Newtime = ()=>{
//         C_time = new Date().toLocaleTimeString();
//         UpdateTime(C_time);
//     }
//     setTimeout(Newtime, 1000);

//     return(
//         <>
//         <div className="container">
//             <h1>{crnt_time}</h1>
//         </div>
        
//         </>
//     );
// }



// 4. ------------------------ After understanding above part , after that Run this ---------
        
     // --> Change in backgroundColor and text on clicking or Double Clicking the btn 

// const UseState = ()=>{
//     var Presentcolor = 'blue';
//     var text = "CLICK ME";
//     const[changecolor,UpdateColor] = useState(Presentcolor);
//     const[changetext,Updatext] = useState(text);

//     const mychange = ()=>{
//         const colorArr = "green";
//         UpdateColor(colorArr);
//         const text = "Hello Pranav 👋";
//         Updatext(text);
//     }

//     const doubleclicked = ()=>{
//         const colorArr = 'red';
//         UpdateColor(colorArr);
//         const text = "Now you got it what's the State is.";
//         Updatext(text);
//     }
//     return(
//         <>
//         <div className="container" id="box-1" style={{backgroundColor : changecolor}}>
//             <button className="btn" onClick={mychange} onDoubleClick={doubleclicked}>{changetext}</button>
//         </div>
        
//         </>
//     );
// }



// -------------------------------- Form part of React ----------------------------------------

    //   ->> here we give ainput text and after submitting it shows in the above h1 text

const UseState = ()=>{

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

export default UseState;