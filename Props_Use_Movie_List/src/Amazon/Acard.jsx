import React from "react";

function Acard(parse) {
    return (
      <>
        <div className="container">
          <img
            src={parse.img_src}
            alt="none"
          />
          <h3 className="describ">AMAZON PRIME ORIGINAL SERIES</h3>
          <h2 className="title">{parse.title_name}</h2>
          <a href={parse.mylink} target="blank"><button id="btn">WATCH NOW</button></a>
  
        </div>
      </>
    );
  }

export default Acard;