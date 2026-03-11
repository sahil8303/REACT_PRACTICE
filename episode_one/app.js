import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id},[
    React.createElement("h1",null,"Hello World"),
    React.createElement("p",null,"This is a simple React app.")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);