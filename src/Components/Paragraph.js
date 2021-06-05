import React from "react";

function Paragraph(props) {
    return (
        <p className="lh-sm">{props.children}</p>
    ) 
}

export default Paragraph;