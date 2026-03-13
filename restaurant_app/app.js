import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./images/logo.png";

/**
 *
 * Header
 *  -lOGO
 *  -Nav Items
 * Body
 *  -Search Bar
 *  -Restaurant List
 *    `-Restaurant Card
 * Footer
 *  -copyright
 *  -Links
 *  -Adress
 *  -Contact
 *  
 */
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className ="app">
            <Header/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

// * Note: In React, we cannot return multiple JSX Element from a component, we need to wrap those JSX Element inside a parent element          
root.render(<AppLayout/>);
