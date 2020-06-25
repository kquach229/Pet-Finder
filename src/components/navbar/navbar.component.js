import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Header = () => {
    return(
        <div className="navbar-container">
            <div className="logo-container">
                <img style={{height:"80px"}} src={require("../../assets/images/logo.png")}/>
                <span>PetFinder</span>
            </div>
            <ul className="navbar-links">
               <Link className="link-item" to="/Home">Home</Link>
               <Link className="link-item" to="/Home">Home</Link>
               <Link className="link-item" to="/Home">Home</Link>
            </ul>
        </div>
    )
}


export default Header;