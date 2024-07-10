import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => {
  return <>
  <h1>hello h1</h1>
 <Para></Para>
  </>;      
};

const Para = () => (
<p>hello p</p>
);
     



root.render(<Heading/>);