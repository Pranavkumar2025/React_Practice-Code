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


const UseState = ()=>{

    var C_time = new Date().toLocaleTimeString();
    const[crnt_time,UpdateTime]= useState(C_time);
    
    const Newtime = ()=>{
        C_time = new Date().toLocaleTimeString();
        UpdateTime(C_time);
    }
    setTimeout(Newtime, 1000);

    return(
        <>
        <div className="container">
            <h1>{crnt_time}</h1>
        </div>
        
        </>
    );
}




export default UseState;