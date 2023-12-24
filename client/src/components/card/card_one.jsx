import React, { useState } from 'react';
import { SolarHelp } from "../../public/Images";
import './card.scss';

const Card_one = ({ image, title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  

  return (
    // <div className="card">
    //   <img src={image} alt={title} className="card-image" />
    //   <h2 className="card-title">{title}</h2>
    //   <p className={`card-content ${isExpanded ? 'expanded' : ''}`}>{content}</p>
    //   {!isExpanded && (
    //     <button onClick={toggleReadMore} className="read-more">
    //       Read more
    //     </button>
    //   )}
    // </div>
    <div className="card" >
      <img src={image} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">
          {title}
          <span style={{ color: "#0CC5FF" }}> Read More</span>
        </h2>
        {/* <p className="card-description">
          {content}{" "}
          
        </p> */}
      </div>
    </div>
  );
};

export default Card_one;
