import React from "react";
import "./landing-page.styles.scss";

const LandingPage = (props) => {
    return(
        <div className="landing-container">
            <h1>PetFinder</h1>
            <span className="exploreButton" onClick={()=>props.history.push("/home")}>Explore</span>
        </div>
    )
}


export default LandingPage;