import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement("h1" , {id:"heading"}, "hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement("div" , {id:"parent"} , 
React.createElement("div"  , {id:"child"} , [
    React.createElement("h1" , {id:"heading"} , "hello heading!") , 
    React.createElement("p" , {id:"para"} , "hello  para!")
])
);


root.render(parent);
