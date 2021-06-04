import React from "react";
import Project from "./Project";

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Project />
                </div>
                <div class="carousel-item">
                    <Project />
                </div>
                <div class="carousel-item">
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default Carousel;