import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js";
import Body from './components/Body/Body.js';

const root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

root.render(<AppLayout/>)