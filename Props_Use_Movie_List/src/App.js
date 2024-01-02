
//                   <<<<<<<<<----------------- THIS IS THE IDEA OF IF/ELSE STATMENTS ------------------------>>>>>>>>>>>

import React from "react";
import Amazon from "./Amazon/amazon";
import Netflix from "./Netflix/netflix";

const input = "Amazon";

const ShowError=()=>{
    return(
        <>
        <h1 style={
            {color : "red",
            textAlign:"center",
            marginTop: "20%"}
        }> !!! YOU ARE NOT GIVING ANY INPUT !!!</h1>
        </>
    );
}
// <<<---------------- Here we use IF/ ELSE for making user interest----------------------->>>
const FavS = ()=>{
    if(input === "Netflix"){
        return(
            <Netflix/>
        );
    }
    else if(input === "Amazon"){
        return(
            <Amazon/>
        );
    }
    else{
        return(
            <ShowError/>
        );
    }
};
const App = ()=>{
    return(
        <>
        <FavS/>
        </>
    );
}
export default App;