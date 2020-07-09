import React from "react";
import "./footer.styles.scss";
import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="contents">
            <div className="trademark-content">
                <img src={require("../../assets/images/logo.png")} alt="" style={{height:"100px", width:"100px"}}/>
                <span>&copy; 2020 PetFinder</span>
                <span>All Rights Reserved</span>
            </div>
           <div className="company-links">
               <h3>Company</h3>
               <Link to="/">About Us</Link>
               <Link to="/">Our Team</Link>
               <Link to="/">Contact Us</Link>
           </div>

           <div className="resource-links">
               <h3>Resources</h3>
               <Link to="/">About Us</Link>
           </div>
            </div>
           
        </div>
    )
}


export default Footer;