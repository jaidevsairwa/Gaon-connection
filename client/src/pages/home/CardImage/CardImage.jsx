import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./cardimage.scss";

const CardImage = ({ ad1, ad2 }) => {
  return (
    <div className="image_container">
        <div className="image_box">
      <a href={ad1?.link}>
          <img
            src={`http://45.126.126.209:1337${ad1?.image?.data?.attributes?.url}`}
          />
      </a>
        </div>
        <div className="image_box">
      <a href={ad2.link}>
          <img
            src={`http://45.126.126.209:1337${ad2?.image?.data?.attributes?.url}`}
          />
      </a>
        </div>
    </div>
  );
};

export default CardImage;
