import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const arr = [1, 2, 3, 4];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

ReactDOM.render(<App />, document.getElementById("app"));
