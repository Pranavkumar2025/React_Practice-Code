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


const UseState = ()=>{

    var text = "Hello";
    var newtxt = "Pranav kumar";

    const [mytxt, Updatetxt] = useState(newtxt);

    const ChangeText = ()=>{
        
    }
    return(
        <>
        <div className="container" id="box-1" >
            <h1 className="head_txt">Hello {newtxt}</h1>
            <input type="text" name="" id="inpt" />
            <button onClick={ChangeText}>Submit</button>
        </div>
        
        </>
    );
}



export default UseState;