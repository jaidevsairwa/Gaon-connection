import React from "react";
import { SolarHelp } from "../../../public/Images";
// import "./card.scss";
const Card = () => {
  return (
    <div className="card">
      <img src={SolarHelp} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">
          The solar buzz in Bundelkhand is helping.
        </h2>
        <p className="card-description">
          Filler text is text that shares some characteristics of a real
          otherwise generated. It may be used ...{" "}
          <span style={{ color: "#0CC5FF" }}> Read More</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
