import React from "react";
import TextCard from "./TextCard";

function Carousel() {
    const placeholderImg = "https://misterrogers.org/wp-content/uploads/2018/05/placeholder-1920x860.png";
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row g-0">
                    <div class="col-md-7"><img src={placeholderImg} class="w-100" alt="..." /></div>
                    <div class="col-md-5">
                    <TextCard/>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
            <img src={placeholderImg} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src={placeholderImg} class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Carousel;