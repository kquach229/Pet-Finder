import React, { useState , useEffect } from "react";
import "./home-page.styles.scss";
import axios from "axios";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {

    return(
        <div className="homepage-container">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-text">This can be your new pet</div>
                    <input type="button" value="learn more"/>
                </div>
               
            </div>
            <div className="initiatives-section">
                <div>
                    <span className="initiative-header-title">What You Can Do</span>
                </div>
                <div className="initiatives">
                    <div className="initiative-group"> 
                        <i className="fas fa-paw fa-3x"></i>
                        <div className="initiative-text">Adopt</div>
                    </div>
                    <div className="initiative-group"> 
                        <i className="fas fa-donate fa-3x"></i>
                        <div className="initiative-text">Donate to the cause</div>
                    </div>
                    <div className="initiative-group"> 
                        <i className="fas fa-hands-helping fa-3x"></i>
                        <div className="initiative-text">Volunteer</div>
                    </div>
                </div>
            </div>
            <div className="gallery-container">
                <h1 className="gallery-title">Some of our rescues...</h1>
                <div className="grid-gallery-container">
                    <div className="grid-image1">
                        <div className="pet-details">
                        <h3>Snicker</h3>
                        <h5>Age: 5</h5>
                        <h5>Rescued: 06/15/2015</h5>
                        </div>
                        
                    </div>
                    <div className="grid-image2">
                    <div className="pet-details">
                        <h3>Joey</h3>
                        <h5>Age: 8</h5>
                        <h5>Rescued: 06/15/2012</h5>
                        </div>
                    </div>
                    <div className="grid-image3">
                    <div className="pet-details">
                        <h3>Kitty</h3>
                        <h5>Age: 3</h5>
                        <h5>Rescued: 06/30/2015</h5>
                        </div>
                    </div>
                    <div className="grid-image4">
                    <div className="pet-details">
                        <h3>Jacob</h3>
                        <h5>Age: 7</h5>
                        <h5>Rescued: 06/15/2015</h5>
                        </div>
                    </div>
                    <div className="grid-image5">
                    <div className="pet-details">
                        <h3>Marty</h3>
                        <h5>Age: 2</h5>
                        <h5>Rescued: 06/12/2015</h5>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
        </div>
    )
}


export default HomePage;