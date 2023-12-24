import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cardimage.scss";

const CardImage = ({ data, type }) => {
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
    <div>
      {data?.length > 0 && (
        <Carousel
          draggable={true}
          customTransition="all .5"
          transitionDuration={500}
          fade={true}
          arrows={true}
          style={carouselStyle}
          responsive={responsive}
          autoplay={true}
          autoplaySpeed={500}
        >
          {data?.map((card, index) => (
            <a href={card?.attributes?.link}>
              <div className="image_container" key={index}>
                <div className="image_box">
                  {type === "images" ? (
                    <img
                      src={`http://45.126.126.209:1337${card?.attributes?.images?.data[0]?.attributes?.url}`}
                    />
                  ) : (
                    <img
                      src={`http://45.126.126.209:1337${card?.attributes?.image?.data[0]?.attributes?.url}`}
                    />
                  )}
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CardImage;
