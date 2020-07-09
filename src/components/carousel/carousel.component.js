import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const CarouselComponent = () => {
    return(
        <Carousel className="carousel-container">
            <div>
                <img className="image-1" src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt="" />
                <p className="carousel-text">Find your soul pet</p>
            </div>
            <div>
                <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/131928-mxiccwtarv-1575034997.jpg" alt=""/>
                <p className="legend">Donate to the cause</p>
            </div>
            <div>
                <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo" alt="" />
                <p className="legend">Learn</p>
            </div>
        </Carousel>
    )
}

export default CarouselComponent;