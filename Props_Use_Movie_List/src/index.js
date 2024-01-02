import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";

ReactDom.render(
  <StrictMode>
    <App/>
  
  </StrictMode>
  ,
  document.getElementById("root")
);
