import React from "react";
import dataS from "./dataS";
import Card from "./Card";

const Netflix = ()=>{
    return(
        <>
        <h1 className="txt">LIST OF TOP 6 NETFLIX SERIES</h1>
        {dataS.map(function(val){
            return(
                <Card
                key = {val.id}
                img_src={val.img_src}
                title_name={val.title_name}
                mylink ={val.mylink}
              />
              );
        })}
        </>
    );
}
export default Netflix;