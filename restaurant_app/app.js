import React from 'react';
import ReactDOM from 'react-dom/client';

/**
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8l2n7sXoVqj3mL1a5v6u9e7b8ZtHkKQ&usqp=CAU" alt="logo" />
            </div>
            <div className="nav-items"> 
        </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className ="app">
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

// * Note: In React, we cannot return multiple JSX Element from a component, we need to wrap those JSX Element inside a parent element          
root .render();
