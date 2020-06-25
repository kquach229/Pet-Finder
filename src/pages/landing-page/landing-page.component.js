import React from "react";
import "./landing-page.styles.scss";

const LandingPage = (props) => {
    return(
        <div className="landing-container">
            <h1>PetFinder</h1>
            <button onClick={()=>props.history.push("/home")}>Explore</button>
        </div>
    )
}


export default LandingPage;