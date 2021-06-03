import React from "react";
import Paragraph from "../Components/Paragraph";

function Header() {
    return(
        <header class="row bg-primary p-5 d-flex justify-content-evenly">
            <div class="col-md-5 text-white lh-sm">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    <p>Testing line height, testing line height, testing line height. Testing line height, testing line height, testing line height. Testing line height, testing line height, testing line height. </p>
                </Paragraph>
            </div>
            <div class="col-md-3">
                <img class="image rounded-circle" src="../../public/profile.jpg" alt="Anisha McDowell" />
            </div>
        </header>
    )
}

export default Header;