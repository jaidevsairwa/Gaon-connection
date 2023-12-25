import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cardimage.scss";

const CardImage = ({ ad1 ,ad2 }) => {
  const carouselStyle = {
    width: "650px", // Set the desired width of the carousel
    height: "650px", // Set the desired height of the carousel
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };


  return (
        <div className="image_container">
      <a href={ad1?.link}>
          <div className="image_box">
              <img src={`http://45.126.126.209:1337${ad1?.image?.data?.attributes?.url}`} />
          </div>
      </a>
      <a href={ad2.link}>
        <div className="image_box">
          <img src={`http://45.126.126.209:1337${ad2?.image?.data?.attributes?.url}`} />
        </div>
      </a>
      </div>
  );
};

export default CardImage;
