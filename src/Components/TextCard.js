import React from "react";
import Paragraph from "./Paragraph";
import CardLinks from "./CardLinks";

function TextCard(props) {
  console.log("props in text card", props)
  return (
        <div className="card h-100 border-0 rounded-0">
            <div className="card-body p-5">
                <h2 className="card-title">Project Title</h2>
                <h3 className="card-subtitle mb-2 text-muted">Card subtitle</h3>
                <Paragraph>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the card title and make up the

                </Paragraph>
                <CardLinks />
            </div>
          </div>
  );
}

export default TextCard;
