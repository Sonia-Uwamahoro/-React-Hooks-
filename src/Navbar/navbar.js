import React from "react";
import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = () =>{
    return(

        <div className="navbar">
            <div className="navbar-logo">
                <h1>
                    App
                </h1>
            </div>
            <div>
            <ul className="navbar-menu">
                <li><Link to="/">Login</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
            </div>
           

        </div>

    );
}

export default Navbar;