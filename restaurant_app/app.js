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
            <div className="logo-container">
                <img 
                className='logo'
                src="https://img.freepik.com/premium-vector/food-logo-design-concept-restaurant-logo-design_9850-5111.jpg" alt="logo" />
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

const RestaurantCard = (props) => {
    console.log(props);
    
    return (
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg7JYWWJNnY-MJVGm02itthRtcc105HPt4Q&s" alt="Restaurant" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating} Stars</h4>
            <h4>{props.deliveryTime}</h4>

            
        </div>
    )
}

const Body =()=>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
            <RestaurantCard resName="Medhna Foods" cuisine="Biryani, North Indian" rating="4.5" deliveryTime="30 mins"/>
            <RestaurantCard resName="Tasty Bites" cuisine="Italian, Pizza" rating="4.2" deliveryTime="25 mins"/>
            <RestaurantCard resName='KFC' cuisine='Fast Food' rating='4.0' deliveryTime='20 mins'/>
            <RestaurantCard resName="Spice Delight" cuisine="Indian, Mughlai" rating="4.3" deliveryTime="35 mins"/>
            <RestaurantCard resName="Burger King" cuisine="Fast Food" rating="4.1" deliveryTime="25 mins"/>
            <RestaurantCard resName="Sushi World" cuisine="Japanese, Sushi" rating="4.6" deliveryTime="40 mins"/>
            <RestaurantCard resName="Pasta Palace" cuisine="Italian, Pasta" rating="4.4" deliveryTime="30 mins"/>
            <RestaurantCard resName="Curry House" cuisine="Indian, Curry" rating="4.2" deliveryTime="30 mins"/>
            <RestaurantCard resName="Taco Town" cuisine="Mexican, Tacos" rating="4.0" deliveryTime="20 mins"/>
            <RestaurantCard resName="Noodle Nook" cuisine="Chinese, Noodles" rating="4.3" deliveryTime="25 mins"/>


            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className ="app">
        
            <Header/>
            <Body/>
        
        
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

// * Note: In React, we cannot return multiple JSX Element from a component, we need to wrap those JSX Element inside a parent element          
root.render(<AppLayout/>);
