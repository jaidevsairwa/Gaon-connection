import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./cardimage.scss";

const CardImage = ({ ad1, ad2 }) => {
  return (
    <div className="image_container">
        <div className="image_box">
      <a href={ad1?.link}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${ad1?.image?.data?.attributes?.url}`}
          />
      </a>
        </div>
        <div className="image_box">
      <a href={ad2.link}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${ad2?.image?.data?.attributes?.url}`}
          />
      </a>
        </div>
    </div>
  );
};

export default CardImage;
