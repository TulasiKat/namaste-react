const heading = React.createElement("h1" , {id:"heading"}, "hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement("div" , {id:"parent"} , 
React.createElement("div"  , {id:"child"} , [
    React.createElement("h1" , {id:"heading"} , "hello world heading!") , 
    React.createElement("p" , {id:"para"} , "hello world para!")
])
);


root.render(parent);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);
