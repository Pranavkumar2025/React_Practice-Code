import React from "react";

const Card = (props)=>{
    return(
        <>
        <div>
            <div className="container">
                <img src={props.imglink} alt="" />
                <h4 className="head">Netflix Original Series</h4>
                <h4 className="head1">{props.Name}</h4>
                <button className="btn" ><a href={props.watchlink} target="blank">Watch Now</a></button>
            </div>
        </div>
        </>
    );
}

export default Card;