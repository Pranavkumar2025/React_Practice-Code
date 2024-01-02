import React from "react";
import Acard from "./Acard";
import Adata from "./Adata";
const Amazon = ()=>{
    return(
        <>
        <h1 className="txt">LIST OF TOP 6 NETFLIX SERIES</h1>
        {Adata.map(function(val){
            return(
                <Acard
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
export default Amazon;