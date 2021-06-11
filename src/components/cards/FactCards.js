import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Cards.css";

const CardStyle = {
  // border: "1px solid #634d4d",
  padding: "20px",
  margin: "20px",
  width: "200px",
  height: "200px",
};

const FactCards = ({ fact }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div style={CardStyle} onMouseEnter={handleClick} className="CardFront">
          <div>
            <img src={fact.image} alt="" />
          </div>
        </div>
        <div style={CardStyle} onMouseLeave={handleClick} className="CardBack">
          <div>
            <h5 style={{ fontSize: "3.5em" }}>{fact.text}</h5>
          </div>
        </div>
    </ReactCardFlip>
  );
};

export default FactCards;
