import React from "react";

function SmallBtn(props) {
    return (
        <button type="button" class="btn btn-warning btn-sm">{props.children}</button>
    )
};

export default SmallBtn;