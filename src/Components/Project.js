import React from "react";
import TextCard from "./TextCard";

const placeholderImg = "https://misterrogers.org/wp-content/uploads/2018/05/placeholder-1920x860.png";

function Project(props) {
    return(
        <div className="row g-0">
        <div className="col-md-7">
            <img src={placeholderImg} className="w-100" alt="..." />
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next w-100" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="col-md-5">
        {/* TODO: FIGURE OUT HOW TO MAKE THE STATE OF THE TEXT CARD CHANGE BASED ON THE CAROUSEL BUTTON CLICKS     */}
        <TextCard/>
        </div>
    </div>
    )
}

export default Project;