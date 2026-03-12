import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = 
(<h1 className="hello">
HelloWorld 
</h1>
)
console.log(jsxheading);




//REACT COMPONENTS
const Title = () => (
    <h1 className="head" tabIndex="1">
        Namaste React USING JSX
    </h1>
);
const HeadingComponent = () => (

    <div id="container">
       <Title />
       <h1>Namaste React Functional Component</h1>
    </div>
     

);
//OR
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


