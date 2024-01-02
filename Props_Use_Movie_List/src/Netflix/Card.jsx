import React from "react";

function Card(parse) {
    return (
      <>
        <div className="container">
          <img
            src={parse.img_src}
            alt="none"
          />
          <h3 className="describ">A NETFLIX ORIGINAL SERIES</h3>
          <h2 className="title">{parse.title_name}</h2>
          <a href={parse.mylink} target="blank"><button id="btn">WATCH NOW</button></a>
  
        </div>
      </>
    );
  }

export default Card;