import React from "react";
import Project from "./Project";

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Project />
                </div>
                <div className="carousel-item">
                    <Project />
                </div>
                <div className="carousel-item">
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default Carousel;